import React from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import * as SurveyTheme from 'survey-core/themes';
import './index.css';
import { json } from './json.js';
import { ElementFactory, Question, Serializer } from 'survey-core';
import {
  SurveyQuestionElementBase,
  ReactQuestionFactory,
  SurveyElementBase,
} from 'survey-react-ui';


// Add a custom `score` property to choice options
Serializer.addProperty('itemvalue', {
  name: 'score:number',
});

const CUSTOM_QUESTION_TYPE = 'descriptivetext';

// A model that extends the Question class and inherits all its properties and methods
export class DescriptiveTextModel extends Question {
  constructor() {
    super();
    // Create a `LocalizableString` object for the `caption` property
    this.createLocalizableString('caption', this);
  }
  getType() {
    return CUSTOM_QUESTION_TYPE;
  }
  get textSize() {
    return this.getPropertyValue('textSize');
  }
  set textSize(val) {
    this.setPropertyValue('textSize', val);
  }
  // Returns caption text that corresponds to the current locale
  get caption() {
    return this.getLocalizableStringText('caption');
  }
  // Sets caption text for the current locale
  set caption(val) {
    this.setLocalizableStringText('caption', val);
  }
  // Returns a `LocalizationString` object for the `caption` property
  get locCaption() {
    return this.getLocalizableString('caption');
  }
}

// Register `DescriptiveTextModel` as a constructor for the "descriptivetext" question type
ElementFactory.Instance.registerElement(CUSTOM_QUESTION_TYPE, (name) => {
  return new DescriptiveTextModel(name);
});

// Configure JSON serialization and deserialization rules for the custom properties
Serializer.addClass(
  CUSTOM_QUESTION_TYPE,
  [
    {
      name: 'caption:text',
      category: 'general',
      visibleIndex: 2,
      serializationProperty: 'locCaption',
    },
    {
      name: 'textSize',
      category: 'general',
      visibleIndex: 3,
      default: 'medium',
      choices: [
        { value: 'small', text: 'Small' },
        { value: 'medium', text: 'Medium' },
        { value: 'large', text: 'Large' },
      ],
    },
  ],
  function () {
    return new DescriptiveTextModel('');
  },
  'question'
);

// Change a placeholder for the Caption property editor
Serializer.findProperty(CUSTOM_QUESTION_TYPE, 'caption').placeholder =
  'Enter descriptive text...';

// Change default values for inherited properties
Serializer.getProperty(CUSTOM_QUESTION_TYPE, 'hideNumber').defaultValue = true;
Serializer.getProperty(CUSTOM_QUESTION_TYPE, 'titleLocation').defaultValue =
  'hidden';

// A class that renders a Descriptive Text question
export class SurveyQuestionDescriptiveText extends SurveyQuestionElementBase {
  get question() {
    return this.questionBase;
  }
  renderElement() {
    const textSize = this.question.textSize;
    let CaptionElement = 'h3';
    switch (textSize) {
      case 'small':
        CaptionElement = 'h4';
        break;
      case 'medium':
        CaptionElement = 'h3';
        break;
      case 'large':
        CaptionElement = 'h2';
        break;
      default:
        CaptionElement = 'h3';
    }
    return (
      <CaptionElement className="descriptiveText">
        {SurveyElementBase.renderLocString(this.question.locCaption)}
      </CaptionElement>
    );
  }
}

// Register `SurveyQuestionDescriptiveText` as a class that renders the Descriptive Text question type
ReactQuestionFactory.Instance.registerQuestion(
  CUSTOM_QUESTION_TYPE,
  (props) => {
    return React.createElement(SurveyQuestionDescriptiveText, props);
  }
);

function SurveyComponent() {
  const survey = new Model(json);
  survey.applyTheme(SurveyTheme.SharpLightPanelless);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  function calculateMaxScore(questions) {
    var maxScore = 0;
    questions.forEach((question) => {
      if (question.choices) {
        const maxValue = Math.max.apply(
          Math,
          question.choices.map((o) => o.score)
        );
        maxScore += maxValue;
      }
    });
    return maxScore;
  }
  function calculateTotalScore(data) {
    var totalScore = 0;
    data.forEach((item) => {
      const question = survey.getQuestionByValueName(item.name);
      const qValue = item.value;
      if (question.choices) {
        const selectedChoice = question.choices.find(
          (choice) => choice.value === qValue
        );
        if (selectedChoice) {
          totalScore += selectedChoice.score;
        }
      }
    });
    return totalScore;
  }

  survey.onCompleting.add((sender) => {
    const maxScore = calculateMaxScore(sender.getAllQuestions());
    // Get survey results as a flat data array
    const plainData = sender.getPlainData({
      // Include `score` values into the data array
      calculations: [{ propertyName: 'score' }],
    });
    const totalScore = calculateTotalScore(plainData);

    // Save the scores in survey results
    sender.setValue('maxScore', maxScore);
    sender.setValue('totalScore', totalScore);
  });
  return <Survey model={survey} />;
}

export default SurveyComponent;

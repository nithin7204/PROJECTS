# Fake News Detection using Machine Learning

This project aims to build a **Fake News Detection System** using various machine learning algorithms. The system classifies news articles as either "fake" or "real" based on their content.

## Project Overview

The goal of this project is to create a classifier that can identify fake news by analyzing the text of news articles. A supervised machine learning approach is used, where models are trained on labeled data to predict the class of unseen news articles.

## Dataset

- The dataset used in this project contains news articles labeled as either `0` (real) or `1` (fake).
- It consists of 44,919 articles, each with the following features:
  - `title`: The title of the news article.
  - `text`: The main content of the article.
  - `subject`: The topic or category of the news.
  - `date`: The publication date.
  - `class`: The label indicating whether the article is fake (`1`) or real (`0`).

## Project Structure

The project involves the following key steps:

1. **Data Preprocessing**: 
   - Handling missing values, if any.
   - Tokenization, stemming, and removal of stopwords from the text.
   
2. **Feature Engineering**:
   - Converting text data into numerical features using methods like:
     - Bag of Words (BoW)
     - Term Frequency-Inverse Document Frequency (TF-IDF)

3. **Model Selection**:
   - Several machine learning algorithms are explored to find the best classifier:
     - Logistic Regression
     - Naive Bayes
     - Support Vector Machine (SVM)
     - Random Forest Classifier

4. **Model Evaluation**:
   - Models are evaluated using accuracy, precision, recall, and F1-score.
   - Cross-validation is performed to avoid overfitting.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/nithin7204/fake-news-detection.git

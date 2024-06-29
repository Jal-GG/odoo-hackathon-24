![fitfuel-high-resolution-logo](https://github.com/Jal-GG/odoo-hackathon-24/assets/119776481/ecab8fc8-28a9-40fb-b61c-eb9dd46c834c)

<h1 align="center">Diet Recommendation System</h1>
<div align= "center"><img src="newlogo.png" />
  <h4>A diet recommendation web application using content-based approach with Scikit-Learn, FastAPI and Streamlit.</h4>
</div>

# Diet-Recommendation-System

## :bookmark_tabs:Table of contents

- [General info](#general-info)
- [Development](#development)
- [Technologies](#technologies)
- [Setup](#setup)

## :scroll: General info

### Motivation

In today's health-conscious world, people are increasingly focused on improving their lifestyle and diet. Avoiding junk food and exercising alone isn't enough; a balanced diet is essential. Tailoring our diet to our height, weight, and age helps maintain a healthy weight, reduce the risk of chronic diseases, and enhance overall health. Noticing the lack of advanced projects in food/diet recommendation, I decided to create a content-based recommendation system using machine learning.

### How we used it?

A content-based food recommendation engine promotes healthy eating by analyzing nutritional content and ingredients to provide personalized recommendations. It considers individual dietary restrictions and preferences, such as allergies, to help users make better food choices and improve their overall health. By suggesting a variety of nutritious options, it helps users discover new foods and maintain a balanced diet, positively impacting long-term health outcomes.

## :computer:Development

The application includes user authentication, allowing users to securely log in and access personalized recommendations. User data and past interactions are stored in a database, enabling the system to provide more accurate and tailored food recommendations based on previous experiences. This approach enhances user engagement and ensures the recommendations are continually improving and relevant to each user.

### Model developement

The recommendation engine is constructed using the Nearest Neighbors algorithm, an unsupervised method for conducting neighbor searches. It provides a consistent interface to three distinct nearest neighbors algorithms: BallTree, KDTree, and a brute-force approach based on routines in sklearn.metrics.pairwise. In our implementation, we utilized the brute-force algorithm with cosine similarity because of its rapid computation for smaller datasets.

$$
cos(θ)=
  ∥A∥×∥B∥
   A⋅B

$$

### Dataset

we used Food.com kaggle dataset Data with over 500,000 recipes and 1,400,000 reviews from Food.com. Visit this [kaggle](https://www.kaggle.com/datasets/irkaal/foodcom-recipes-and-reviews?select=recipes.csv) link for more details.

### Backend Developement

The application is developed with the FastAPI framework, enabling the creation of fast and efficient web APIs. When a user submits a request to the API (including user data, nutrition data, etc.), the model generates a list of recommended foods that match the user's criteria. These recommendations are then sent back to the user through the API.

### Frontend Developement

The application is developed with a React frontend and a Node.js backend. When a user submits data, the backend processes the request and uses the model to generate a list of suitable food recommendations. These recommendations are then sent back to the user through the FASTAPI, ensuring a fast and efficient response.

### Deployement using Docker

#### Why Docker?

By using Docker, you can ensure that the environment in which the application is exactly the same as the environment in which it was built, which can help prevent unexpected issues and improve model performance. Additionally, Docker allows for easy scaling and management of the deployment, making it a great choice for larger machine learning projects.

#### Docker-Compose

My project is composed of different services (frontend,API). Therefore, our application should run on multiple containers. With the help of Docker-compose we can share our application using the yaml file that define the services that runs together.

### Project Architecture

## :rocket: Technologies

The project is created with:

- Python: 3.12.8
- fastapi 0.88.0
- scikit-learn 1.1.3
- Pandas: 1.5.1
- Streamlit: 1.16.0
- Numpy: 1.21.5
- beautifulsoup4 4.11.1

![](https://img.icons8.com/color/48/null/python--v1.png)![](https://img.icons8.com/color/48/null/numpy.png)![](Assets/streamlit-icon-48x48.png)![](Assets/fastapi.ico)![](Assets/scikit-learn.ico) ![](https://img.icons8.com/color/48/null/pandas.png)

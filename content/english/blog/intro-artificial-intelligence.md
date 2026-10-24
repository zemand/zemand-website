---
date: "2026-10-24"
title: "Artificial intelligence: an introduction for beginners"
categories: ["Artificial Intelligence"]
image: "images/blog/intro/artificial-intelligence-cover.svg"
author: "andrii-zemlianyi"
translationKey: "intro-artificial-intelligence"
draft: false
---

In just a few years, artificial intelligence has gone from a topic for research conferences to a tool people use every day: chatbots write emails, translators translate, models help write code. But AI is not only chat. In factories it predicts breakdowns, finds defects and tunes equipment settings. Let's look at what is behind these words, how it works and where its limits are.

## What artificial intelligence is

**Artificial intelligence (AI)** is an umbrella term for systems that perform tasks which normally require human thinking: recognize, predict, decide, put into words. It is a broad concept, and inside it are several narrower fields that people often mix up.

{{< image src="images/blog/intro/artificial-intelligence-nested-en.svg" width="1200" height="730" alt="Nested circles: artificial intelligence, machine learning, deep learning, LLMs" caption="Each concept is a part of the previous one" position="center" >}}

- **Artificial intelligence** is the widest circle. It even includes a 1990s chess program running on rules written by people.
- **Machine learning (ML)** covers systems that learn from examples instead of following pre-written rules.
- **Deep learning** is machine learning with multi-layer neural networks. It is what brought the breakthrough in recognizing images, speech and sound.
- **Generative AI and large language models (LLMs)** are models that create new text, code and images. Today's chat assistants belong here.

## How machine learning differs from programming

{{< image src="images/blog/intro/artificial-intelligence-vs-programming-en.svg" width="1200" height="600" alt="Comparison of classic programming and machine learning" caption="In programming a person writes the rules; in machine learning an algorithm finds them" position="center" >}}

In **classic programming** a person writes the rules: "if the temperature is above 80 °C, turn on the fan." The program takes data and produces an answer according to those rules.

But some tasks have rules that are impossible to write down. Try describing in words how to tell a cat from a dog in a photo: ears? They vary. Size? Same. In **machine learning** we give an algorithm thousands of examples together with the correct answers ("this is a cat," "this is a dog"), and it works out its internal "rules" by itself. The result of training is called a **model**.

The model is then applied to new data it has never seen. This step is called **inference**. Training can take weeks on powerful servers; inference can take milliseconds on a small device.

## How a neural network learns (no formulas)

A neural network is a large number of simple computing units connected to each other. Each connection has a **weight**, a number that sets how strongly one unit influences another. At first the weights are random, and the network answers at random.

Training goes like this:

1. Show the network an example (a photo of a cat).
2. It gives an answer ("dog, 70%").
3. Measure how wrong it was.
4. Nudge all the weights slightly in the direction that makes the error smaller.

Repeat millions of times. Gradually the network learns to recognize features, from simple lines and blobs in the first layers to ears, eyes and faces in the deeper ones.

## Three ways to learn

- **Supervised:** there are examples with correct answers. Defect recognition, energy consumption forecasts.
- **Unsupervised:** there are no answers, and the model looks for structure in the data on its own. For example, it groups similar machine operating modes or notices unusual behavior.
- **Reinforcement:** the model tries actions and gets a "reward" for good results. This is how models learn to play games, and in industry, to control complex processes in simulation.

## How large language models work

LLMs are trained on enormous amounts of text with a task that seems simple: **predict the next word** (more precisely, the next piece of a word, a token). To do this well, the model is forced to "learn" grammar, facts, reasoning and style. It is then further trained to be a helpful assistant: to follow instructions and answer questions.

This leads to an important limitation: the model generates plausible text; it doesn't check facts. So it can confidently state something false, which is called **hallucination**. Modern systems partly counter this by searching documents and the web, but important answers still need to be checked.

The next step is **agents**: LLMs that don't just reply with text but use tools. They run code, query databases, fill in documents and carry out multi-step tasks.

## AI in industry

{{< image src="images/blog/intro/artificial-intelligence-predictive-maintenance-en.svg" width="1200" height="600" alt="Bearing vibration chart: the model spots an anomaly long before failure" caption="Predictive maintenance: repair before the breakdown, not after" position="center" >}}

- **Predictive maintenance.** A model watches vibration, temperature and motor current, and notices that behavior has changed long before a breakdown. Instead of a sudden line stop, the repair is planned for a convenient time.
- **Quality control.** Neural-network-based [computer vision](/categories/computer-vision/) finds defects that are hard to describe with rules.
- **Process optimization.** Models tune furnace modes, dosing and speeds to use less [energy](/categories/energy-management/) and raw material.
- **Assistants for engineers.** LLMs find answers across hundreds of pages of documentation, help write and review code for PLCs and robots, and prepare reports. The key word is "help": when it comes to controlling physical equipment, the decision stays with people and proven safety systems.

## Limitations and risks

- **Data.** A model is no better than the data it was trained on. If the data has no winter months, the model "doesn't know" about winter.
- **Explainability.** A neural network often can't explain why it made a decision. For critical systems that is a problem.
- **Hallucinations and errors.** Especially in generative models.
- **Security.** A model can be fooled by specially crafted data, and connecting AI to production networks opens new attack paths. More on this in the introduction to [cybersecurity](/categories/cybersecurity/).
- **Regulation.** The EU has the Artificial Intelligence Act (AI Act). It entered into force in 2024 and its requirements are phased in; in 2026 the EU agreed to push part of the high-risk requirements back to 2027–2028. For companies that work with the EU, this is already a practical question.

## How to get started

1. Use chat assistants deliberately: give them context, ask them to explain their reasoning, check the facts.
2. Take a free introductory machine learning course and train your first model in Python (with scikit-learn or PyTorch).
3. Take a real dataset, such as readings from your electricity meter, and try to predict tomorrow's consumption.

AI is neither magic nor a replacement for engineering; it is a new tool on top of it. It works best where there is good data, a clear task, and people who understand both the process and the model's limits. In the next articles we will look at concrete examples.

---
date: "2026-10-24"
title: "Computer vision: an introduction for beginners"
categories: ["Computer Vision"]
image: "images/blog/intro/computer-vision-cover.svg"
author: "andrii-zemlianyi"
translationKey: "intro-computer-vision"
draft: false
---

Your phone unlocks when it sees your face. A camera in a factory spots a scratch on a part in a fraction of a second, one a person would miss. A car recognizes a pedestrian at a crossing. All of this is computer vision: the field that teaches machines to understand images. Let's look at how a computer "sees," what tasks it can solve and where it is used.

## What computer vision is

Computer vision is the set of methods for extracting useful information from photos or video. Not just storing a picture, but answering questions about it: what is in it? where exactly? how many? is there a defect?

For people, seeing is the easiest thing in the world. We recognize a friend in a crowd without thinking. For computers it was long one of the hardest problems. The reason becomes clear once you look at what a computer actually gets from a camera.

## What a computer "sees"

{{< image src="images/blog/intro/computer-vision-pixels-en.svg" width="1200" height="680" alt="A 10 by 10 pixel image of a washer and its table of brightness values" caption="To a computer, an image is a table of numbers" position="center" >}}

An image is made of **pixels**, small squares. In a black-and-white image each pixel is one number from 0 (black) to 255 (white). A color image has three such tables: red, green and blue (RGB). An ordinary 12-megapixel camera produces 36 million numbers per frame.

So a computer doesn't see "a washer." It sees a table of numbers. The job of computer vision is to find patterns in those numbers that correspond to a washer, a scratch or a face, and to do it so the result doesn't change when the lighting, angle or background shifts a little.

## Three basic tasks

{{< image src="images/blog/intro/computer-vision-tasks-en.svg" width="1200" height="590" alt="Classification, detection and segmentation shown on a metal plate with a scratch" caption="The same part, three different questions" position="center" >}}

- **Classification** answers "what is in the image?" A good part or a defective one. A cat or a dog.
- **Detection** finds objects and draws boxes around them: "scratch here, 94% confidence." This is how people are counted in a frame or boxes found on a pallet.
- **Segmentation** determines exactly which pixels belong to an object. You need it when the precise shape matters: the area of a stain, the outline of a part, the borders of a tumor on a scan.

Beyond these there are reading text and codes (OCR), measuring dimensions, tracking objects across frames and estimating 3D position.

## Two approaches: classic and neural networks

**Classic computer vision** is a toolbox of proven algorithms: filters, edge and contour detection, template matching. The engineer decides what to look for: "if there is a dark spot larger than 2 mm on a light background, it's a defect." These algorithms are fast, predictable and work well in controlled conditions. The best-known library for them is **OpenCV**.

**Deep learning** changed the field from around 2012. Instead of describing features by hand, you show a neural network thousands of examples, and it learns by itself what separates a scratch from a reflection. Popular models such as the **YOLO** family run real-time detection even on small devices. For more on how neural networks learn, see the introduction to [artificial intelligence](/categories/artificial-intelligence/).

In practice the two are often combined: classic methods prepare the image and take precise measurements, while a neural network handles the hard decisions.

## How it works on a production line

{{< image src="images/blog/intro/computer-vision-pipeline-en.svg" width="1200" height="440" alt="Five steps of a machine vision system: light and camera, capture, analysis, decision, action" caption="A machine vision system, from camera to reject" position="center" >}}

1. **Light and camera.** Lighting is chosen to make the defect as visible as possible: for example, light at a low angle turns scratches into bright lines.
2. **Capture.** A sensor on the conveyor signals that the part is in frame, and the camera takes a picture.
3. **Analysis.** An algorithm or neural network processes the image.
4. **Decision.** Good or reject, what the dimensions are, where the part lies.
5. **Action.** The result goes to the [PLC](/categories/industrial-automation/), which rejects the part or guides a robot.

The main lesson everyone who builds these systems learns quickly: **good lighting matters more than a clever algorithm**. If a defect is barely visible in the image, no neural network will find it reliably.

## Where it is used

- **Quality control:** scratches, chips, wrong assembly, liquid level in a bottle.
- **Reading codes and markings:** barcodes, QR codes, dates on packaging.
- **Robots that see:** find a part lying any which way in a bin and pick it up.
- **Safety:** notice a person in a danger zone or a missing hard hat.
- **Outside the factory:** medical imaging, agriculture (crop health from drones), cars, checkout-free stores.

## Where the data comes from

A neural network has to be trained, and that takes **labeled data**: thousands of images where a person has marked what is a defect and what isn't. Factories have a paradox here: there are millions of good parts but only a handful of defective ones. So people use **augmentation** (artificially rotating, relighting and adding noise to existing images), **synthetic data** (generating realistic defect images) and models that learn to spot "something unusual" from examples of normal parts only.

## Where the field is heading

- **Vision foundation models.** Large models trained on billions of images can segment almost any object without extra training. This sharply cuts the time it takes to start a project.
- **Vision-language models.** You can show them a photo and ask in text: "What's wrong with this board?" For quick experiments this already works; for critical decisions on the line, caution is still needed.
- **Edge AI.** Neural networks run right inside smart cameras, without sending video to a server.
- **3D vision.** Stereo cameras and structured light give not just a picture but depth.

## How to get started

1. Install Python and the OpenCV library. Load a photo, convert it to grayscale, find the edges. That's ten lines of code.
2. Take a ready-made pretrained detection model (for example from the YOLO family) and run it on your own photos or webcam video.
3. Try a small real problem: count the coins on a table, or tell a broken cookie from a whole one.

Computer vision is one of the most visible ways to see [artificial intelligence](/categories/artificial-intelligence/) at work in real production. In the next articles we will cover cameras, lighting and the first hands-on projects.

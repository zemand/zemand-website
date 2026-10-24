---
date: "2026-10-24"
title: "Robotics: an introduction for beginners"
categories: ["Robotics"]
image: "images/blog/intro/robotics-cover.svg"
author: "andrii-zemlianyi"
translationKey: "intro-robotics"
draft: false
---

When people hear "robot," most picture a metal human from the movies. In fact, the most common robot on the planet is an arm bolted to a factory floor, repeating the same motion thousands of times a day to within a few hundredths of a millimeter. Let's look at how it works, what kinds of robots there are and why there are more of them every year.

## What an industrial robot is

What sets a robot apart from an ordinary automatic machine is that it can be **reprogrammed** for a different task without rebuilding the hardware. A packaging machine can do one thing: pack. A robot welds car bodies today, and after a new program and gripper it stacks boxes.

The International Federation of Robotics (IFR) counts about **542,000** industrial robots installed worldwide in 2024 alone, twice as many as ten years earlier. In total, around **4.66 million** robots are now working in factories, and more than two million of them are in China.

## Why it matters

Robots get the jobs known as the "three Ds": **dirty, dull, dangerous**.

- **Dangerous:** welding, painting, handling hot or heavy parts.
- **Dull:** moving 10,000 identical parts in a shift.
- **Precise:** assembling electronics, where half a millimeter off means a reject.

There is one more reason: demographics. In many countries the working-age population is shrinking, and plants simply cannot hire anyone for the line. Robots don't necessarily "take jobs": often they fill positions nobody applies for, while people move to setup, maintenance and supervision.

## What a robot is made of

{{< image src="images/blog/intro/robotics-anatomy-en.svg" width="1200" height="700" alt="Industrial robot diagram: manipulator, end effector, controller, teach pendant, safety zone" caption="The main parts of a robot cell" position="center" >}}

1. **Manipulator**, the "arm" itself. A classic industrial robot has **6 axes**: each axis is a joint with an electric motor. Six axes are enough to put a tool at any point in the work area at any angle, much like your arm from shoulder to wrist.
2. **End effector**, whatever the robot holds at the end: a gripper, a vacuum cup, a welding torch, a paint gun. The end effector decides what the robot actually does.
3. **Controller**, a cabinet of electronics that computes in real time how every motor must turn so the tool moves along a straight line.
4. **Teach pendant**, a tablet on a cable. The operator uses it to "drive" the robot, save points and build a program.
5. **Safety**: fences, light curtains, laser area scanners. If a person enters the zone, the robot slows down or stops.

The three specs people look at first when choosing a robot:

- **Payload**: how many kilograms it can hold, tool included.
- **Reach**: how far the arm extends.
- **Repeatability**: how precisely the robot returns to the same point. For typical robots it is a few hundredths of a millimeter.

## How a robot knows where to move

For the controller, each point is an X, Y, Z coordinate plus three tool angles. Its job is to turn "I want the tool here" into "rotate axis 1 by 32°, axis 2 by −15°..." This is called **inverse kinematics**. The good news: the controller does the math, and the programmer works with points and paths.

There are two ways to program a robot:

- **Online**, with the pendant: move the robot to a point, save it, go to the next one. Simple, but the line stands still meanwhile.
- **Offline**, in a simulator: build a 3D model of the cell on a computer (for example in ABB RobotStudio or similar tools from other vendors), write and test the program, then load the finished program onto the real robot.

## Types of robots

{{< image src="images/blog/intro/robotics-types-en.svg" width="1200" height="710" alt="Six robot types: articulated, SCARA, delta, gantry, cobot, mobile" caption="Each type has its niche" position="center" >}}

- **Articulated (6-axis)**: the all-rounders and the most common type.
- **SCARA**: they move mostly in a horizontal plane and are very fast at assembling small parts.
- **Delta robots**: they look like a spider hanging from above. They sort cookies, pills and small goods at incredible speed.
- **Cartesian (gantry)**: they move along straight X-Y-Z rails. Simple, precise, and capable of a huge work area.
- **Cobots** (collaborative robots): lighter and slower, with force sensors. They can work next to people without a fence, if the risk assessment allows it.
- **Mobile robots (AMR)**: they drive around the shop and warehouse on their own, map the space and steer around people.

## Safety is not optional

An industrial robot is strong and fast, and it doesn't "see" a person unless sensors teach it to. That's why robots have their own standards: **ISO 10218** (a revised edition came out in 2025) and **ISO/TS 15066** for humans and cobots working together. Even a cobot is not automatically safe: what is safe or not is the whole cell, including the tool, the part and the task.

## Where the field is heading

- **Robots that see.** Cameras and [computer vision](/categories/computer-vision/) let robots pick parts that lie randomly in a bin, not just ones in a fixed position.
- **AI for control.** Models trained on human demonstrations learn to grasp new objects without programming every point by hand.
- **Mobile manipulators.** An arm on a mobile base can drive up to a machine by itself.
- **Humanoids.** Several companies are testing humanoid robots in factories and warehouses. For now these are pilots, not mass deployment, but progress is fast.

## How to get started

1. Download a free or trial simulator from a robot maker and try programming a simple pick-and-place.
2. Brush up on school geometry: coordinate systems and angles are the language robots speak.
3. If you want hardware, build a small servo-driven robot arm. It is far from industrial, but the principles are the same.

A robot is always part of a wider [industrial automation](/categories/industrial-automation/) system: the same PLC controls it, and it gets parts from the same conveyor. In the next articles we will look at how this fits together in practice.

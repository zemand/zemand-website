---
date: "2026-10-24"
title: "Industrial automation: an introduction for beginners"
categories: ["Industrial Automation"]
image: "images/blog/intro/industrial-automation-cover.svg"
author: "andrii-zemlianyi"
translationKey: "intro-industrial-automation"
draft: false
---

Tap water, bread at the shop, medicine at the pharmacy. Behind each of these is a plant or station that runs around the clock, often with only a few people on shift. Machines do the rest of the work: they measure, decide and act on their own. That is industrial automation. In this article we will look at what it is made of and why the modern world simply doesn't work without it.

## Automation in plain words

Automation means handing the routine part of a job over to a machine. Not the whole job, just the part that repeats: open a valve when the tank is full; stop the conveyor when a part gets stuck; keep the oven at exactly 180 °C.

Every automatic system does three things in a loop:

1. **Measure** what is happening right now (sensor).
2. **Decide** what to do about it (controller).
3. **Act** to change the situation (actuator).

{{< image src="images/blog/intro/industrial-automation-loop-en.svg" width="1200" height="640" alt="Control loop diagram: sensor, controller, actuator, process" caption="The control loop, using a water heating tank as an example" position="center" >}}

Take a tank of water that must stay at 60 °C. The sensor reads 55 °C and passes it to the controller. The controller compares the value with the desired one (called the **setpoint**) and decides it needs to heat. It turns on the heater, the water warms up, the sensor sees the new value, and the loop starts again. Engineers call this a **closed control loop**: the system sees the result of its own actions and corrects them.

Your water heater, your air conditioner and even an iron with a thermostat work on the same principle. A plant has thousands of such loops, all linked together.

## Why it matters

- **Quality.** A machine does the same operation the same way a thousand times in a row. People get tired, distracted and make mistakes.
- **Safety.** Automation takes over work near hot furnaces, chemicals and high voltage. Dedicated safety systems stop the process faster than a person could react.
- **Productivity.** A line runs 24/7 without breaks.
- **Labor shortage.** Many countries, Ukraine included, lack skilled workers. Automation lets a smaller team do more.
- **Energy and materials.** Precise control means less scrap, less wasted heat and less lost raw material.

## What an automation system is made of

### Sensors

These are the system's "senses." They turn a physical quantity into an electrical signal: temperature, pressure, level, flow, presence of a part, position, weight. The simplest sensor only says "yes/no" (part present or not); a more advanced one gives an exact number (pressure 4.73 bar).

### Actuators

These are the "muscles": electric motors, valves, pneumatic cylinders, heaters, pumps. They receive a command and change something in the physical world. Motor speed is often controlled by variable frequency drives, so a pump spins exactly as fast as needed.

### The controller (PLC)

This is the "brain." In industry it is most often a **programmable logic controller**, or PLC. From the outside it looks like a row of modules on a DIN rail inside an electrical cabinet. Inside is a specialized computer that endlessly repeats a simple cycle: read all inputs, run the program, write all outputs. One cycle takes a few milliseconds.

Why not an ordinary computer? Because a PLC is built to run for decades in dust, vibration and temperature swings, and to always respond within a predictable time. For a motor that must stop when a hand gets caught between rollers, "usually fast" is not good enough. It has to be "guaranteed fast."

### HMI and SCADA

An **HMI** (human-machine interface) is the touch panel next to a machine, where the operator sees its state and presses buttons. **SCADA** is a system that collects data from many PLCs and shows a whole shop, or even a whole network of sites, on control room screens: alarms, trends, history.

### Industrial networks

All of this is connected. In the past, with a separate wire to every sensor; today, with industrial networks such as PROFINET, EtherNet/IP and Modbus TCP. For exchanging data between different systems and vendors, **OPC UA** is used more and more: a kind of common language that lets equipment from different brands report what is going on.

## The automation pyramid

To keep all these levels straight, engineers draw a pyramid. It is described, among others, by the ISA-95 standard.

{{< image src="images/blog/intro/industrial-automation-pyramid-en.svg" width="1200" height="700" alt="Five-level automation pyramid: field, PLC, SCADA, MES, ERP" caption="The lower the level, the faster the decisions; the higher, the more data and the longer the horizon" position="center" >}}

- **Level 0, field:** sensors and actuators that touch the process directly.
- **Level 1, control:** PLCs making decisions in milliseconds.
- **Level 2, supervision:** SCADA and HMI, where operators work.
- **Level 3, MES:** the manufacturing execution system. It knows which order is on the line, how much has been made and how much was scrapped.
- **Level 4, ERP:** the company's business system: purchasing, stock, finance.

In reality the borders between levels are blurring: data from a sensor can reach cloud analytics within a second. But as a map for a beginner, the pyramid is still very useful.

## How PLCs are programmed

PLC programming languages are defined by the international standard **IEC 61131-3**. The most common are:

- **LD (ladder logic)** looks like an electrical diagram. It was created so that electricians used to relays could move to PLCs easily.
- **FBD (function block diagram)** is a program made of blocks connected by lines.
- **ST (structured text)** is a text language similar to Pascal, handy for calculations.
- **SFC (sequential function chart)** is for processes that run in steps: fill, heat, mix, drain.

Our tank example in ST would look roughly like this:

```pascal
IF Temperature < Setpoint - 1.0 THEN
    Heater := TRUE;    // too cold: heat
ELSIF Temperature > Setpoint + 1.0 THEN
    Heater := FALSE;   // too hot: stop
END_IF;
```

The one-degree gap keeps the heater from clicking hundreds of times a minute around the setpoint. Real systems often use a **PID controller** instead of simple on/off, which adjusts the power smoothly. That is a topic for a separate article.

## Where the field is heading

- **Industry 4.0.** Equipment is becoming "connected": data from every machine is available for analysis, not just for control.
- **IT/OT convergence.** The world of office computers (IT) and the world of plant equipment (OT) are merging. This brings new opportunities and new risks, which is why [cybersecurity](/categories/cybersecurity/) is now a required part of automation.
- **Software PLCs and virtualization.** Some control logic is moving from separate boxes onto industrial servers.
- **Digital twins.** A virtual model of a line can be tested in simulation before the equipment even arrives.
- **AI on top of automation.** The classic PLC is not going anywhere, but above it come systems that predict failures, tune settings, and help engineers write and check code.

## How to get started

1. Learn basic electrics: voltage, current, relays, dry-contact and 4–20 mA sensors.
2. Install the free CODESYS environment and try writing your first PLC program in the simulator.
3. Play with plant simulators such as Factory I/O, where you can control a virtual conveyor.
4. Look at any automatic system around you (an elevator, a washing machine, traffic lights) and try to break it down into sensors, a controller and actuators.

Automation is the foundation for the other topics on this blog: [robotics](/categories/robotics/), [computer vision](/categories/computer-vision/) and [artificial intelligence](/categories/artificial-intelligence/). In the next articles we will look at each part in more detail.

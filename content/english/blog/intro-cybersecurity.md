---
date: "2026-10-24"
title: "Industrial cybersecurity: an introduction for beginners"
categories: ["Cybersecurity"]
image: "images/blog/intro/cybersecurity-cover.svg"
author: "andrii-zemlianyi"
translationKey: "intro-cybersecurity"
draft: false
---

On 23 December 2015, the lights went out in several regions of Ukraine. The cause was not a storm or an accident, but hackers who had remotely broken into regional power companies' control systems and started switching off substations. About 225,000 customers lost power. It was the first known case in the world of a cyberattack cutting people's electricity. A year later the attack was repeated in Kyiv, and in 2022 Ukrainian specialists and their partners stopped another attempt. So for us, industrial cybersecurity is not an abstraction. Let's look at what exactly needs protecting and how.

## How industrial cybersecurity differs from the usual kind

When people talk about cybersecurity, they usually picture passwords, viruses on laptops and data leaks. That is the world of **IT**, information technology. A plant, power station or water utility also has the world of **OT** (operational technology): equipment that controls physical processes, such as [PLCs, SCADA, sensors and drives](/categories/industrial-automation/).

A failure in IT means lost data. A failure in OT can mean a stopped line, a ruined batch, an explosion or an injured person.

{{< image src="images/blog/intro/cybersecurity-cia-en.svg" width="1200" height="680" alt="The confidentiality, integrity, availability triad and different priorities in IT and OT" caption="The same three goals, in a different order of priority" position="center" >}}

The classic security model is the **CIA triad**:

- **Confidentiality**: only the right people can see the data.
- **Integrity**: nobody has tampered with data or commands.
- **Availability**: the system works when it is needed.

In an office, confidentiality usually comes first. In a plant, it is **people's safety and continuous operation**. You can't "just reboot the server" in the middle of a shift, or install an update without checking that it won't break the furnace control.

## Why industrial systems are vulnerable

- **Equipment lives for decades.** A PLC installed 20 years ago still works, but it was designed when nobody thought about cyberattacks on factories.
- **Old protocols without protection.** Many industrial protocols, such as classic Modbus, don't check who is sending a command. Whoever gets into the network can control the equipment.
- **Updates are hard.** Stopping a line to update is expensive, so vulnerabilities can remain for years.
- **More and more connections.** Remote access for contractors, cloud analytics, links to the office network. Every such connection is a potential door.
- **Attacks through IT.** In 2021 ransomware hit the office systems of the US company Colonial Pipeline. The pipeline controls themselves were not hacked, but the company shut the pipeline down for several days as a precaution, and parts of the US East Coast faced fuel shortages.

The best-known example of a targeted attack on OT is the **Stuxnet** worm (discovered in 2010). It changed how the PLCs controlling centrifuges behaved while showing operators normal values. It is a good illustration of why data integrity matters so much in industry: the operator saw "all fine" while the equipment was being destroyed.

## What protection is made of

{{< image src="images/blog/intro/cybersecurity-zones-en.svg" width="1200" height="712" alt="The network split into zones: internet, office, DMZ, control network, field, with firewalls between them" caption="Defense in depth: each layer stops part of the attacks" position="center" >}}

The key idea is **defense in depth**. No single magic box protects against everything. Instead, you build several layers, and an attacker has to get through each one.

1. **Inventory.** You can't protect what you don't know about. The first step is a list of all equipment, software, versions and connections.
2. **Network segmentation.** The network is split into zones by importance, with firewalls between zones that let through only the traffic that's needed. An office laptop should have no direct path to a PLC. Between the office and the plant there is often a **demilitarized zone** (DMZ), a buffer through which data flows in one direction.
3. **Access control.** Individual accounts, the minimum rights needed, two-factor authentication for remote access, and no shared passwords like "admin/admin."
4. **Vulnerability management.** Follow vendor advisories and update when possible. When it isn't possible, compensate with other measures.
5. **Monitoring.** Dedicated systems listen to the industrial network and raise an alert if someone sends a PLC an unusual command.
6. **Backups and a response plan.** Copies of PLC programs and configurations, stored separately. And a clear plan for who does what if an attack happens.
7. **People.** Most attacks start with a phishing email or a USB stick. Staff training is not a formality.

## Standards and laws

- **IEC 62443** is the main family of international standards for industrial control system security. It describes the split into zones and the conduits between them, security levels, and requirements for equipment makers.
- **NIS2** is an EU directive that requires operators in energy, water, manufacturing and other important sectors to manage cyber risk and report incidents.
- The **Cyber Resilience Act (CRA)** is an EU regulation on products with digital elements. Since 11 September 2026, manufacturers have had to report vulnerabilities that attackers are actively exploiting, and the main requirements for the products themselves apply from December 2027. This covers industrial equipment and anyone who sells it in the EU.
- In Ukraine, incident response is coordinated by **CERT-UA**, and protection of critical infrastructure is set by national cybersecurity law.

## Where the field is heading

- **AI on both sides.** Attackers use [AI](/categories/artificial-intelligence/) for convincing phishing and for finding vulnerabilities; defenders use it to detect anomalies in traffic.
- **Secure by design.** Regulation is pushing manufacturers to build protection into the product from the start, rather than patch it later.
- **Zero trust.** The principle "verify every connection, even inside the network" is gradually reaching OT too.

## What you can do right now

1. Turn on two-factor authentication wherever you can, especially for remote access.
2. Make a list of equipment that is reachable from the internet. You may be surprised.
3. Change default passwords on panels, routers and controllers.
4. Back up your PLC programs and check that you can actually restore from the backup.
5. Read your national CERT's guidance (in Ukraine, CERT-UA): it is practical and written for real local conditions.

Cybersecurity is not a product but a process, like [energy management](/categories/energy-management/) or quality. In the next articles we will go through IEC 62443 and practical network segmentation with examples.

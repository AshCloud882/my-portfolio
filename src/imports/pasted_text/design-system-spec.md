Part 1: Global Design System (HCI Setup)
Before drawing any frames in Figma, set up these global variables. Consistency here guarantees the 10 marks for "Interface Components."

1. The 3-Color Palette

Color 1: Background (Clean Canvas) - #F8F9FA (Soft Off-White)

Usage: All page backgrounds, card backgrounds (with slight drop shadows).

Color 2: Structural & Text (High Contrast) - #1E293B (Deep Slate/Charcoal)

Usage: All typography (headers, body text), navigation bar background, footer, and borders.

Color 3: Interactive Accent (The Guide) - #0EA5E9 (Tech Blue)

Usage: Call-to-Action (CTA) buttons, active navigation links, hover states, and key icons. This tells the user exactly what is clickable.

2. Typography

Font Family: Use Inter or Roboto (Built into Figma. High legibility scores for HCI).

Hierarchy: * H1 (Page Titles): 48px, Bold, Slate.

H2 (Section Titles): 32px, Semi-Bold, Slate.

Body: 16px, Regular, Slate.

3. Interaction Styles (5 Marks)

Hover States: When hovering over a Blue CTA button, it scales up slightly to 1.05x (Use Figma's "While hovering" -> "Smart Animate").

Navigation: All pages must use a "Dissolve" or "Slide In" transition to feel like a cohesive web application.

Part 2: The 6-Page Layout Blueprint
In Figma, create 6 Desktop frames (1440 x 1024). Every single page MUST have the exact same Navigation Bar at the top.

Top Navigation Bar (Appears on every page)
Left Side: Logo (Text: "GJY" in Tech Blue).

Right Side: Links to [Home] [About] [Academic] [Portfolio] [Contact] [CV].

HCI Trick: Highlight the current page's link in Tech Blue so the user knows where they are (Information Navigation - 5 marks).

Page 1: Home (The Landing Page)
Layout Style: Split screen (Hero Section).

Left Column (60% width):

Greeting: "Hello, I am" (16px, Tech Blue).

Name: "Gan Jin Yong" (H1, Slate).

Tagline: "AI & Computer Science Student specializing in Machine Learning and Agentic Workflows."

Buttons: Two buttons side-by-side.

Primary Button (Blue fill, White text - Wait, strict 3 colors means the text must be the background color off-white #F8F9FA inside the button): "View My Work"

Secondary Button (No fill, Blue border, Blue text): "Contact Me"

Right Column (40% width):

A clean, professional headshot or a minimalist tech-themed illustration inside a slate-colored frame.

Page 2: About Me (Personal Qualities)
Layout Style: Centered column text with a 3-card grid below.

Header: "Personal Qualities"

Grid Content (3 identical rectangular cards, Slate borders, Blue icons):

Analytical Thinking: Skilled at extracting actionable insights from raw, complex datasets.

Technical Adaptability: Quick to learn and implement new paradigms, from object-oriented structures to predictive modeling.

Structured Execution: Dedicated to writing clean, organized code and building systems with clear, logical architectures.

Page 3: Academic History
Layout Style: Vertical Timeline. This is visually much better for HCI than a bulleted list.

Visual Structure: A vertical blue line down the left side with three nodes (circles) connected to it.

Node 1 (Top): * Date: 2024 – Present (Blue text)

Institution: Universiti Teknikal Malaysia (UTeM)

Degree: Bachelor of Computer Science in Artificial Intelligence

Details: Core Focus: Machine Learning, Fuzzy Logic, Object-Oriented Programming. Current CGPA: 3.88.

Node 2 (Middle): * Date: 2022 – 2024

Institution: SMJK Chung Ling Butterworth

Degree: Sijil Tinggi Persekolahan Malaysia (STPM)

Details: CGPA 3.33.

Node 3 (Bottom): * Date: 2017 – 2022

Institution: SMJK Chung Ling Butterworth

Degree: Sijil Pelajaran Malaysia (SPM)

Details: STEM Stream.

Page 4: Portfolio (Work Produced)
Layout Style: Asymmetrical Card Grid (Showcasing the top project prominently).

Top Card (Full Width - Hero Project):

Title: Real Estate Liquidity Predictor

Tags (Blue pills): Agentic AI | Fuzzy Logic | Excel

Overview: Designed an Agentic AI workflow that processes Excel file inputs to evaluate and output the exact likelihood of a real estate property being sold.

Key Features: Integrated a Fuzzy Logic Controller for market nuances; Automated the data pipeline to ingest raw Excel datasets.

Action: "View Details" button linking to Page 5.

Bottom Cards (Split 50/50 width):

Card 1: Early Detection of Heart Cardiovascular. Tags: Python, Machine Learning. Details: Predictive model identifying early risk factors. Processed/cleaned medical datasets.

Card 2: Comprehensive Library Management System. Tags: Java, Java Swing, MySQL. Details: Full-stack application. Role-based access (Admin/Member), tracks borrowing history, manages catalog.

Page 5: Project Deep Dive (Uniqueness/Added Value - 2 marks)
Why this page? Fulfills the "more than 5 pages" rule and shows extra effort.

Content: Expand on the Real Estate Liquidity Predictor.

Layout:

Large title at the top.

A flowchart graphic (using only your 3 colors) demonstrating how the Agentic AI ingests the Excel file, passes it through the Fuzzy Logic Controller, and outputs the result. This proves HCI capability by visualizing a complex data flow.

Page 6: Contact & Details
Layout Style: Split screen.

Left Column (Contact Info):

Text: "Let's Connect."

Email Icon + Text: jinyonggan10@gmail.com

Location Icon + Text: (Add your general location, e.g., Malaysia)

Right Column (Functional Form):

Build a mock UI for a contact form to show interface design skills.

Fields: "Name" (Input box), "Email" (Input box), "Message" (Large text area).

Submit Button (Tech Blue).
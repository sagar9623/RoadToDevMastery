HTML (HyperText Markup Language):

Purpose: HTML is used to create the structure and content of a web page. It defines what each part of a web page is — whether it's a paragraph, an image, a header, a link, a list, or some other type of content.

How It Works: HTML consists of a series of elements or tags, like '<p>' for paragraphs, '<a>' for links, '<img>' for images, etc. These tags are used to mark up the text, which tells the web browser how to display the content.

Example: '<p>'This is a paragraph in HTML.'</p>'

Q.1.What you need to learn HTML?
ANS: 1. Visual Studio Code 2. Visual Studio Extensions 1. prettier 2. Live Server

Q.2.What is Prettier Extension?
ANS: With this extension we can format our code and make it pretty, this is a very popular extension. In other words A "Prettier" code formatter extension is a popular tool used in software development for automatically formatting code to ensure it adheres to a consistent style. This tool is widely used in the development community for a variety of programming languages and markup languages like HTML, CSS, JavaScript, and more.

Key features:

1. Consistent Formatting.
2. Integration with Editors.
3. Customizable Rules.
4. Time Saving.
5. Reduced Merge Conflicts.
6. Support for Multiple Languages.
7. CLI and Pre-Commit Hooks.

Q.3.What is a Live Server extension?
Ans: With Live server we can launch our website inside a development web server. In other words, The Live Server extension is a very popular and useful tool for web developers, often used in code editors like Visual Studio Code. Its primary purpose is to create a local development server, allowing developers to test and view their web pages in real-time in a web browser. This tool is particularly beneficial for front-end development involving HTML, CSS, and JavaScript.

Key features:

1. Real-time Reload.
2. Easy to Use.
3. Local Development Server.
4. Testing Across Different Devices.
5. Support for Preprocessors.(Live Server can work with tools that compile preprocessors like Sass or LESS into CSS)
6. Customizable Settings
7. Enhanced Workflow

\*Fundamentals of Web Development that I Learn

1. The language & tool of web development.
2. Key concepts (eg URL, HTTP, DOM, etc).
3. How websites work.
4. Inspect network traffic using DevTools.
5. Basics of HTML & CSS.
6. Validating web pages.

Q.4. How Web Works?
ANS: The Address that we have in the browser address bar is called a URL (Uniform Resource Locator/Location), Basically it's a way to locate a resource on internet resources can be web pages also called HTML documents, they can be images, video files, fonts and so on.

     so we type the URL of a website and hit enter what happens now, ther are two pieces invlove here the browser also called as client and computer or computer that host our target website we refer to this as web server or servers, this is what we called client server model.

     The Client requests a service the server provides the service, the browser send the message to the server and says hey give me the home page of this website.

     This message is formatted based on a protocol called HTTP or HYPERTEXT TRANSFER PROTOCOL, In simple language HTTP is a language that client and servers use to talk to each other, it's not a programming language it's a plain textual language for communicating over internet.

     We also have HTTPS which is HTTP with Encryption (HTTP+Encryption) so the messages exchanged between the client and the server are encrypted.

     So the server recives the message, it figures out what the client is asking and then it will send a message back to the client. The first message is called an HTTP request and the second message is called HTTP response, every data exchange using the HTTP protocol involves two messages a request and a response.

     After getting the response as the browser reads this HTML Document it construct what we call a DOM (Document Object Model). This is the model that represents the object or elements in our HTML Document. What are this elements? This are all the bulding blocks of our page like paragraphs of text, images, linkes and other stuff.

     Now as the browser is reading this HTML document that is returned from the server it descovers references to other resources in this document like images, fonts and other stuff, each of this resources has an adress or a URL.

     So for each resources the browser sends a separate HTTP request to the server to fetch that resource many of this HTTP request are set in parallel so we can see the page as quickly as possible, once the browser has all the necessary resources, it will render the HTML Document.

     Rendering an HTML Document means displaying it.

\*Inspecting HTTP request and Responses.
Open chrome and click right click of your mouse and select inspect, here you can inspect all the requests that are made by the client to the server.

Q.5.What is DOM?
ANS: The DOM, or Document Object Model, is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages like JavaScript can interact with the page.

Here's a more detailed breakdown of what the DOM is and how it works:

**Tree Structure:** The DOM represents a document as a tree structure where each node is an object representing a part of the document. The nodes can be elements, attributes, text, etc. This tree structure allows for the easy traversal and modification of the document.

**Dynamic Interface:** Although the DOM is constructed from the HTML or XML content of a page, it is dynamic. This means that changes made to the DOM via scripts will immediately reflect on the web page without needing to refresh it. For instance, you can use JavaScript to add or remove elements, change styles, respond to user actions, and more.

**Language-Neutral:** While it is most commonly interacted with using JavaScript in web browsers, the DOM is actually designed to be independent of any particular programming language. Its interfaces are defined by standards, making it accessible to various languages that can manipulate web documents.

**Levels and Standards:** The DOM is defined by various standards and levels by the World Wide Web Consortium (W3C). These standards ensure that scripts and DOM implementations are consistent across different browsers and platforms. For example, DOM Level 1 focused on the core document structure, DOM Level 2 introduced events, and DOM Level 3 further improved on these with more detailed event handling and other features.

      DOM Levels: The DOM standards are organized into different levels, each building upon the previous ones and introducing new functionalities and improvements. For example:

      DOM Level 1: Focused on the basic structure of the document, allowing the manipulation of elements and their attributes.

      DOM Level 2: Introduced more advanced features such as events, styles, and traversal of the document tree.

      DOM Level 3: Further enhanced the model with better support for document loading, saving, validation, and more complex event handling.

**Interaction with Web APIs:** In modern web development, the DOM is often interacted with alongside various Web APIs (Application Programming Interfaces) that provide additional functionalities like drawing graphics on a canvas, playing audio and video, or storing data on the client-side.

     (APIs, or Application Programming Interfaces, are sets of rules, protocols, and tools for building software and applications. They define the way different software components should interact with each other and allow different parts of a computer program to communicate, making it possible to combine different technologies and data to create new applications.

     APIs can be broadly categorized into a few types:

     Web APIs: These are designed for the web and allow different software systems to communicate over the internet. Web APIs typically use HTTP as their communication protocol and can return data in formats like JSON or XML. Examples include RESTful APIs, SOAP APIs, and GraphQL APIs.

     Library/Framework APIs: These APIs are provided by software libraries or frameworks, giving developers pre-built components or functions to perform tasks without having to write the code from scratch. For example, the jQuery library provides an API for manipulating HTML documents.

     Operating System APIs: These provide functions for interacting with the underlying operating system, such as file handling, memory management, and process control. For example, the Windows API allows developers to create applications that run on the Windows platform.

     Database APIs: These allow applications to communicate with database management systems. They provide functions for querying and manipulating data stored in a database. SQL (Structured Query Language) is an example of a database API.

     Hardware APIs: These provide functions for interacting with hardware devices, such as printers, cameras, and sensors. They allow software to use the functionality of these devices without needing to understand the details of how they work.)

Q.6.What is Validator W3?
ANS: The "Validator W3" commonly refers to the W3C Validation Service, an important tool provided by the World Wide Web Consortium (W3C) for checking the markup validity of web documents. It supports various types of documents, including HTML, XHTML, SMIL, MathML, and others. The purpose of this validation service is to ensure that web documents adhere to the standards and guidelines set by the W3C, which helps maintain interoperability and accessibility across the web.

     Key Features of W3C Validator:

     **Markup Validation:** It checks web documents to ensure they are correctly structured according to the specific markup language they use (e.g., HTML5, XHTML). This helps identify syntax errors, improper use of elements, and other issues that might affect the document's rendering and accessibility.

     Accessibility Checks: Although primarily focused on markup validation, using the validator in conjunction with other tools can help highlight potential accessibility issues that need to be addressed to make web content more accessible to people with disabilities.

     Standards Compliance: By validating documents against W3C standards, the validator helps ensure that web content is more likely to be displayed correctly and consistently across different browsers and devices.

     Web Development Best Practices: The validator encourages best practices in web development by prompting developers to fix errors and adhere to web standards, leading to cleaner, more efficient code.

     Educational Tool: It serves as an educational tool for developers, helping them learn about web standards and how to apply them correctly.

     How to Use the W3C Validator:

     Direct Input: You can copy and paste your document's markup directly into the validator's input field.

     By URI: You can provide the URL of the page you want to validate, and the validator will fetch the document.

     File Upload: You can upload files directly from your computer for validation.

     Via Browser Extension/Add-on: Some browser extensions allow you to validate pages directly while browsing.

Q.7.If you want a badic HTML Boilerplate?
ANS: After Creating an index.html file in the vscodeIn the index.html just type !nd press Tab and you will get a bac boilerpate which means a ba HTML template.

     Computers don't understand charaters like A,B,C.... and so on they only understand numbers which are represented in the binary format zeros and ones so by usin character set, we can map a character to numeric value.

     The first character was design was ASCII (American Standard Code for Information Interchange),character set is a character encoding standard for electronic communication. ASCII codes represent text in computers, telecommunications equipment, and other devices that use text. The standard is based on the English alphabet and includes a total of 128 characters, covering control characters (such as carriage return and tab), printable characters (including digits, letters, punctuation marks), and whitespace characters (like space and newline).

     The character set we mostly use this days is UTF-8 (8-bit Unicode Transformation Format) is a variable-width character encoding used for electronic communication. It is capable of encoding all 1,112,064 valid character code points in Unicode using one to four 8-bit bytes. UTF-8 has become the dominant character encoding for the World Wide Web, accounting for a significant portion of all web pages.

     Here's a comparison between ASCII and UTF-8 character sets in table form:

Feature ASCII UTF-8
Character Range 128 characters (0–127) Over 1.1 million characters (0–0x10FFFF)

Encoding Scheme Fixed-width, 7 bits per character Variable-width, 1–4 bytes per character

Compatibility - Backward compatible with ASCII

Character Set Primarily English characters,
digits,and control codes Supports a vast array of character from virtually all human languages and symbols

Usage Historically used in early
computing and telecommunications Predominant encoding for the web, supporting global languages and scripts

Byte Range 0x00 to 0x7F 1-byte range: 0x00 to 0x7F (ASCII compatible), extended bytes for other characters

Internationalization Limited support, primarily
for English Designed for global use, accommodating various languages and scripts

Efficiency Highly efficient for English
text and control codes Efficient for ASCII range; variable efficiency for other characters depending on their code points

Standardization One of the earliest encoding
standards Part of the Unicode standard, which aims to cover all characters for all writing systems

Q.8.What is Meta?
ANS: The term "meta" can have several meanings depending on the context in which it's used. In general, "meta" refers to a concept that is an abstraction from another concept, used to complete or add to the latter. Here are a few common contexts in which "meta" is used:

    In Computing and the Web:

    Meta Elements in HTML: In the context of HTML and web development, '<meta>' tags are used in the '<head>' section of an HTML document to provide metadata about the web page. This can include information about the page's description, author, character set, keywords for search engines, and viewport settings.

    For example:

    <meta name="description" content="An overview of meta concepts in various contexts.">

Q.9.What is <em> element in HTML?
ANS:The <em> element in HTML is used to mark text that should be emphasized. Emphasis in this context typically means that the text has a stress emphasis, which can change the meaning of the sentence. Visually, browsers usually render the <em> element as italicized text, but the semantic meaning of emphasis is what's important. This semantic meaning can be used by screen readers and other assistive technologies to convey the emphasis to users.

    For example:

    <p>I <em>really</em> need to finish this by tomorrow.</p>

Key Points:

**Semantic Emphasis:** The primary purpose of the '<em>' element is to indicate that the enclosed text should be emphasized semantically, not just visually.

**Styling:** By default, web browsers will style text within an '<em> element as italicized, but this can be overridden with CSS.

**Accessibility:** Assistive technologies may interpret the '<em>' element in a way that conveys emphasis to users, such as altering the tone or pitch of voice in a screen reader.

**Nested Emphasis:** You can nest '<em>' elements for greater levels of emphasis. However, this should be used sparingly and only when necessary to convey the intended meaning.

**Difference from '<strong>':** The '<em>' element is often confused with the '<strong>' element. While both can result in italicized or bold text, respectively, their semantic meanings differ. '<strong>' indicates strong importance or seriousness, whereas '<em>' indicates stress emphasis.

**Tip**
To wrap any content into em element, their is a short way to do it, go to view-command palette, or just press ctrl+shift+p, with this command palette can execute commands in vs code. in command palette search for "Wrap with abbreviation" then press enter and type the element that you want to use to wrap our selected content, in this case '<em>'.

Q.10.What are HTML entities?
ANS: HTML entities are special codes used in HTML to represent characters that have a specific meaning in HTML syntax, or that cannot be easily typed using a standard keyboard. These entities are used to ensure that the characters are displayed correctly in a web browser, avoiding any potential interpretation as HTML markup or syntax.

HTML entities typically start with an ampersand (&) and end with a semicolon (;). They can be specified by using either the name of the entity or its numeric code.

Common Uses of HTML Entities:
Reserved Characters: To display characters that are part of HTML syntax, such as <, >, and &, you use entities to prevent the browser from interpreting them as HTML code. For example:

- '&lt;' represents '<'
- '&gt;' represents '>'
- '&amp;' represents '&'
  Non-Printable Characters: Some characters can't be easily typed or displayed, like a non-breaking space '(&nbsp;)', which is used to create a space that will not be broken by automatic line wrapping.

Special Symbols: HTML entities can represent various symbols, mathematical operators, and special characters that might not be present on all keyboards or may not be easily accessible. For example:

- '&copy;' represents the copyright symbol ©
- '&euro;' represents the Euro currency symbol €
- '&reg;' represents the registered trademark symbol ®
  Character References: In addition to named entities, characters can also be referenced by their numeric code, which corresponds to their position in the Unicode or ASCII table. This is done using &# followed by the number; for example, '&#169; also represents the copyright symbol.

For example:

<p>The &lt;div&gt; tag defines a division in an HTML document.</p>
<p>Use &amp; to represent an ampersand.</p>
<p>&copy; 2024 My Website</p>

Key Points:

HTML entities are essential for writing clean, error-free HTML.

They help in displaying characters that might otherwise be interpreted as HTML code or that are not directly accessible on a keyboard.

Using entities enhances the readability and compatibility of HTML documents across different browsers and devices.

Q.11.What is <a href=""></a>?
ANS: The 'href' attribute in HTML stands for "hypertext reference" and is used to specify the URL (Uniform Resource Locator) of a page that a link points to. It is most commonly used within an '<a>' (anchor) element, but it can also be used in other elements, such as '<link>' and '<base>' tags.

**Usage in Anchor Tags:**
When used within an '<a>' element, the 'href' attribute defines the destination of a hyperlink, which can be a webpage, a fragment within a webpage, a file, an email address, or any other URL. Users can click on the hyperlink to navigate to the specified URL.

For example:

<a href="https://www.example.com">Visit Example.com</a>
<a href="mailto:katekhayesagar7@gmail.com">Email Me</a>

**Usage in Link Tags:**
In a '<link>' element, typically found within the '<head>' section of an HTML document, the 'href' attribute specifies the location of an external resource like a stylesheet.

For example:

<link rel="stylesheet" href="styles.css">

**Usage in Base Tags:**
The '<base>' element can include an 'href' attribute to set a base URL for all relative URLs within a document. This means that any relative URL will be resolved from this base URL rather than the document's URL.

For example:

<base href="https://www.example.com">

Q.12.what is the difference between a Link and a Hyperlink?
ANS: **Hyperlink:**

- A hyperlink in HTML is specifically used for elements that allow users to navigate from one resource to another by clicking or tapping. The most common element associated with hyperlinks is the anchor tag '<a>'.

- Hyperlinks can link to different types of resources, such as another HTML page, an image, a download file, an email address (using 'mailto':), or a location within the same page (using an anchor with '#').

- The defining feature of a hyperlink is its interactivity and functionality in navigating or linking to other resources.

Example of a hyperlink:

<a href="https://www.example.com">Visit Example.com</a>

**Link:**

- In HTML, the term "link" can have a broader meaning but is often used specifically in the context of the '<link>' element. The '<link> element is used to define a relationship between the current document and an external resource. This is most commonly used to link stylesheets, but it can also be used for other purposes like linking to a favicon or preloading resources.

- The '<link>' element is not used for navigation by the user and does not create a clickable link in the content of the page. Instead, it's a way to connect the document to external resources that are used by the browser to enhance or style the page.

Example of a link using the '<link'> element:

<link rel="stylesheet" href="styles.css">

**Summary:**

- In HTML, a hyperlink is specifically an interactive element created using the '<a> tag that users can click on to navigate to other resources.

- A link, particularly when referring to the '<link>' element, is used to associate external resources like CSS files with the document, but it is not interactively used by the end-user for navigation.

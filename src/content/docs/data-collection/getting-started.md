---
title: Instalación del SDK
description: Cómo integrar nuestro SDK en tus productos.
---

This library is a lightweight and optimized solution for tracking user events and utilizing an identification system to build user preferences, designed to be used in any Single Page Application (SPA). It allows third-party websites to send predefined events with ease.

## Features

- Modular and maintainable TypeScript code
- Functional programming approach
- Strong type safety with TypeScript
- Clear and concise error handling
- Easy integration with minimal configuration
- Comprehensive documentation and usage examples

## Installation

To install the library, use npm or yarn

```bash
  npm install @reservamos/browser-analytics
```

## Usage

```typescript
// Import the tracker and the InitConfig interface if you want to use type safety
import analytics, { InitConfig } from "@reservamos/browser-analytics";

// Define the configuration for the tracker
const config: InitConfig = {
  mixpanelToken: "YOUR_MIXPANEL_TOKEN",
  identificationKey: "YOUR_IDENTIFICATION_KEY",
  debug: true,
};

// Initialize the tracker with the config
analytics.init(config);

// Listen for the "Tracker Ready" event
window.addEventListener("Tracker Ready", () => {
  console.log("Tracker Ready");

  // Track a test event
  analytics.track.test();
});
```

## Identifying Users

The `identify` method accepts a main identifier and an object containing user information. The object has four predefined fields: `email`, `firstName`, `lastName`, and `phone`. In addition to these, you can include any custom fields to store additional user-specific information as needed.

```typescript
import analytics from "@reservamos/browser-analytics";

// Identify the user with the main identifier and additional information

analytics.identify("main-identifier", {
  email: "example",
  firstName: "John",
  lastName: "Doe",
  phone: "123456789",
  salesforceId: "123456789",
});
```

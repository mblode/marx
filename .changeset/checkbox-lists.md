---
"marx-css": minor
---

A `<ul>` whose items contain a checkbox or radio now drops its bullets and indent automatically, so checkbox lists and task lists read as option groups instead of bulleted controls. Classless (no `.task-list` class needed), via `:has()`; browsers without `:has()` keep the bullets.

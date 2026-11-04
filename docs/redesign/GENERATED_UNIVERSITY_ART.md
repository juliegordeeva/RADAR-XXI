# Иллюстрации навыков и университета

Сгенерированы встроенным инструментом `image_gen` по визуальным референсам брендбука. Режим CLI/API не использовался.

- `public/images/radar/mascots/radarik-skills.webp` — новая поза Радарика с символами четырёх компетенций. Используется на первом экране `/ru/podhod/` и `/en/podhod/` рядом с точной SVG-диаграммой. Подписи остаются в HTML/SVG.
- `public/images/radar/scenes/university-workshop.webp` — семейная проектная мастерская для первого экрана университета. Это тематическая иллюстрация планируемой практики, а не фотография готового курса.

Прозрачность сохранена; исходные иллюстрации проекта не заменялись. Оригиналы PNG остаются в стандартной папке генератора; сайт использует оптимизированные WebP из репозитория.

## Промпт: Радарик и навыки

```text
Use case: illustration-story / identity-preserve.
Asset type: a new transparent web illustration derived from the attached RADAR KIDS reference characters, to sit BESIDE a precise HTML/SVG skills radar. Image 1 is the identity and texture reference for Radarik; image 2 is the brand style reference, not a layout to reproduce.
Create a new pose of the SAME Radarik: rounded turquoise guardian, cream face, large navy eyes, two flexible teal antennae with coral tips, mustard yellow hands and boots, yellow radar emblem on belly. He stands in a friendly three-quarter pose on the RIGHT of a portrait 3:4 composition and extends his left hand towards an imaginary chart OUTSIDE the LEFT edge. Keep the gesture natural, full body and antennae inside the image. No notebook covering his body.
Four small hand-painted symbols float lightly around him: a magnifying glass for thinking, a light bulb for creating/adapting, two overlapping speech bubbles for working together, a small flag/check mark for completing a goal. Their colors are brand teal, navy, olive and purple, with mustard and coral details. They are supporting accents, not a second mascot. Leave a small breathing margin. This is a single finished character illustration, not a sheet of variations.
Style: contemporary warm children's book illustration like references, matte flat gouache color shapes, subtle print grain inside shapes, softly irregular contours, one shade for volume, selective thin navy linework. Preserve exact brand character identity and proportions, with expressive but not 3D eyes.
Palette #078E9E #FFF5E3 #102E4A #F9B817 #F05227 #804C91 #67784E.
Background: genuinely transparent alpha, including between symbols. No painted rectangular background, no white halo, no drop-shadow frame. Text: NONE. Do not generate any chart, data axes, numbers, labels, letters, logo wordmark or watermark: the real 12-axis chart and skill names are rendered separately as website code.
```

## Промпт: университет

```text
Use case: illustration-story / identity-preserve.
Asset type: new transparent landscape hero scene derived from RADAR KIDS references for a CHILDREN'S CORPORATE UNIVERSITY website. Reference image 1 is the family identity master sheet. Reference image 2 shows the existing illustration texture and palette, not the composition to repeat.
Create a fresh project workshop scene, not the family drawing flowers at a table: the same eight-year-old ginger girl with two low curly pigtails, mint sweatshirt, loose mustard trousers and navy sneakers confidently presents a small cardboard bridge/town model she and her seven-year-old ginger brother are building. The boy wears a purple sweater with cream horizontal stripes, navy trousers and red sneakers; he carefully sets the final cardboard piece in place. Children own the activity, adults do not do it for them.
Beside their low workshop table is a simple freestanding planning board with three large pictogram cards connected by an arrow: idea light bulb, hands/building piece, small finish flag. NO letters or numbers. Their mother (dark chestnut wavy hair, coral rolled-sleeve shirt, wide navy trousers, white sneakers) listens and holds a plain clipboard at the side. Father (tall adult, short navy curls, navy beard, long nose, teal sweater, olive trousers, white sneakers) kneels slightly to the children's level and watches attentively. A SMALL Radarik in the reference's proportions peeks from beside two books at the lower right, celebrating the children's own progress. Adults and children do not look at him.
Landscape roughly 3:2, cohesive asymmetrical group, show full child silhouettes and a readable project model, no crowded crowd, no cropped heads, useful soft silhouette for website placement. All family members must retain their reference identity and clothing. Adults have adult proportions, children look school-age, not toddlers.
Contemporary hand-painted storybook style: matte gouache, flat saturated shapes with subtle print grain, selective navy outlines, warmth and curiosity. Palette warm paper #FFF5E3, navy #102E4A, teal #078E9E, coral #F05227, mustard #F9B817, mint and olive, purple sweater.
Background: actual transparent alpha around scene, no room walls, no square background, only a small plant and a very short soft ground mark if needed. No school building, no graduation caps, no robes, no diplomas, no medals, no business suits, no logos or external brands. Text: NONE. No words, letters, numbers, fake labels or watermark. This is illustrative planned practice, not a promise of a specific launched class.
```

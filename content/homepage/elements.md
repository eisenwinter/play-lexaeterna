---
title: 'Elements'
# The "weight" will determine where this section appears on the "homepage".
# A bigger weight will place the content more towards the bottom of the page.
# It's like gravity ;-).
weight: 2
# If "header_menu" is true, then a button linking to this section will be placed
# into the header menu at the top of the homepage.
header_menu: true
---


Of corse no great monster brawl is complete without elemental types. Each monster can have one elemental types - and you might have guessed it - elements may be strong or weak against another element.


{{<element elm="Light">}}
{{%column%}}
Lights weaknesses are:
- Light
- Water
{{%/column%}}
{{%column%}}
Light excels against:
- Darkness
{{%/column%}}
{{</element>}}



{{<element elm="Darkness">}}
{{%column%}}
Darkness weaknesses are:
- Light
- Fire
- Earth
{{%/column%}}
{{%column%}}

{{%/column%}}
{{</element>}}



{{<element elm="Earth">}}
{{%column%}}
Earthes weakneses are:
- Darkness
- Plant
- Wind
{{%/column%}}
{{%column%}}
Earth excels against:
- Water
- Fire
{{%/column%}}
{{</element>}}


{{<element elm="Fire">}}
{{%column%}}
Fires weaknesses are:
- Light
- Water
- Earth
{{%/column%}}
{{%column%}}
Fire excels against:
- Darkness
- Plant
{{%/column%}}
{{</element>}}


{{<element elm="Plant">}}
{{%column%}}
Plants weaknesses are:
- Darkness
- Fire 
- Wind
{{%/column%}}
{{%column%}}
Plant excels against:
- Light
- Earth
{{%/column%}}
{{</element>}}


{{<element elm="Water">}}
{{%column%}}
Waters weaknesses are:
- Plant
{{%/column%}}
{{%column%}}
Water excels against:
- Fire
- Wind
{{%/column%}}
{{</element>}}


{{<element elm="Wind">}}
{{%column%}}
Winds weaknesses are:
- Water
{{%/column%}}
{{%column%}}
Wind excels against:
- Plant
- Wind
{{%/column%}}
{{</element>}}


{{<element elm="Organic">}}
{{%column%}}
Organics weaknesses are:
- Light
- Darkness
{{%/column%}}
{{%column%}}
Oragnic monsters do not excel against any other elemental type, 
but have almost no significat weaknesses overall.
{{%/column%}}
{{</element>}}



#### Overview

Heres a rough overview of how well elements do against each other

|          | Light | Darkness | Water | Plant | Fire | Earth | Wind | Organic |
|----------|-------|----------|-------|-------|------|-------|------|---------|
| Light    |   -   |       ++ |     ~ |   -   |    ~ |   -   |    ~ |       ~ |
| Darkness |   -   |        ~ |     ~ |     ~ |  -   |   -   |    ~ |       ~ |
| Water    |   ~   |        ~ |     ~ |   --  |   ++ |     ~ |   ++ |       ~ |
| Plant    |   ++  |     --   |     ~ |   -   | --   |    ++ |  -   |       ~ |
| Fire     |   -   |       ++ |   --  |    ++ |  -   |   --  |    ~ |       ~ |
| Earth    |   ~   |      -   |    ++ |   -   |   ++ |   -   |   -- |       ~ |
| Wind     |   ~   |        ~ |   -   |    ++ |    ~ |     ~ |  ~+  |       ~ |
| Organic  |   -   |      -   |     ~ |     ~ |    ~ |     ~ |    ~ |       ~ |

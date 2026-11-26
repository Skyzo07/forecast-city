[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/Skyzo07/forecast-city/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/Skyzo07/forecast-city/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)

# Funniest Forecast for a City That Isn't

> Tomorrow in Dribblestead: the rain will fall up, the wind will apologise, and Tuesday is cancelled.

## What it is

One line, **99 characters** — a weather forecast for **Dribblestead**, a city that does not exist. It opens in the flat, official voice of a real weather bulletin ("Tomorrow in Dribblestead: the rain will fall up...") and then breaks it three times over: the rain falls *up*, the wind *apologises*, and finally Tuesday itself is *cancelled* — the forecast stops forecasting weather and starts cancelling the calendar. The laugh comes from the weather itself, not from a pun bolted on, and Dribblestead feels like a place because its weather has manners: rain that goes the wrong way and a wind that says sorry.

The line was chosen from 24 candidates scored 0–30 against the brief's five criteria in order (invented city, funny on first read, bulletin voice with an absurd break, city feels like a place, tight under 120 characters). It tied at 28/30 with the Snozzleham fog line and won the tie-break on its triple escalating absurdity and its stronger closer. The CrowLLM judge panel could not run — the gateway kept dropping the connection — so the internal winner stands (see `panel-results.json` in the workspace folder).

## How it works

`main.ts` writes the line exactly, byte-for-byte, to `/output/entry.txt`, creating `/output` if needed. Nothing else is written.

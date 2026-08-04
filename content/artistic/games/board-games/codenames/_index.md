+++
title = "Codenames"
description = "Codenames is a party game for 4+ players where two teams compete by guessing words related to clues given by their spymaster. ~15 min."
aliases = ["codenames"]

[extra]
orientation = "landscape"
updated = 2027-01-01
site_version = 1
theme = "light"
toc_level = 2
see_also = [
  { title = "Permalink", href = "/codenames" },
  { title = "Codenames", href = "https://codenames.game/" },
  { title = "Official Words", href = "https://codenames.miraheze.org/wiki/Category:Word_Collections" },
]
options = [
  { 
    name = "Word List", id = "word-list", type = "select", options = [
      { name = "Word List: Base (899 words)", value = "一Word_List_Base.txt" },
      { name = "Word List: Core (800 words)", value = "一Word_List_Core.txt" },
      { name = "Word List (400 words)", value = "一Word_List.txt" },
    ] 
  },
  { name = "Regenerate", id = "regenerate", type = "button" },
]
+++

<div id="codenames-board" class="chart defer"></div>

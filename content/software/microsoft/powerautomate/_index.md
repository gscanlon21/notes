+++
title = "Power Automate"
description = ""
sort_by = "title"

[extra]
updated = 2026-03-01
see_also = []
+++

{{ <hidden page={page} section={section} /> }}


# Overview

**Use Variable**
: ?



# Flows

**/_api/cloudflow/v1.0/trigger/2668c376-6fdc-f111-84ea-7ced8d6fce76**
: ?



##### Invoke a Flow
```javascript
Microsoft.PowerPages.onPagesClientApiReady(async function ($pages) {
    const response = await $pages.ajax.request({
        method: "POST",
        url: "/_api/cloudflow/v1.0/trigger/2668c376-6fdc-f111-84ea-7ced8d6fce76",
        body: {
            To: "grahamscanlon@webster.edu",
            Subject: "Impact Center - Opportunity",
            Body: "You have been rejected by the opportunity."
        }
    });

    console.log(response.data);
});
```


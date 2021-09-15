# Dank Memes API

## GET (all)
**Endpoint:** `/memes`

### Example Response
```json
    [
        {
            "id": 1,
            "title": "Dank meme1",
            "url": "https://url.com" 
        },
        {
            "id": 2,
            "title": "Dank meme2",
            "url": "https://url.com"
        }
    ] 
```

### Description
Returns a list of all memes


## GET (one)
**Endpoint:** `/memes/{id}`


### Example Response
```json
    {
        "id": 1,
        "title": "Dank meme1",
        "url": "https://url.com"
    }       
```

### Description
Returns the meme with the given id else 404       


## POST
**Endpoint:** `/memes`

### Example Request
```json
    {
        "title": "New Meme",
        "url": ""
    }
```

### Example Response
```json
    {
        "id": 3,
        "title": "New Meme",
        "url": ""
    }
```

### Description
Creates a new meme with auto incremented id   

## PUT
**Endpoint:** `/memes/{id}`

### Example Request
Url: `/memes/1`
```json 
    {
        "title": "Dank meme1 updated",
        "url": "https://url.com"
    } 
```

### Example Response
```json 
    {
        "id": 1,
        "title": "Dank meme1 updated",
        "url": "https://url.com"
    } 
```

### Description
Updates the meme with the given id

## PATCH
**Endpoint:** `/memes`

### Example Request
```json 
    {
        "title": "Changed Title"
    } 
```

### Example Response
```json 
    {
        "id": 1, 
        "title": "Changed Title",
        "url": "https://url.com"
    } 
```

### Description
Updates part the meme with the given id

## DELETE
**Endpoint:** `/memes`

### Description
Deletes the meme with the given id



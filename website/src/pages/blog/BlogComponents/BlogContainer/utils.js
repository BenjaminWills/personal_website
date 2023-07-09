export function splitTagsToArray(tags){
    // Create an array of tags from the objects passed
    const tagList = tags.map(
        tag => <li key={tag.name}>{tag.name}</li>)
    return tagList
}
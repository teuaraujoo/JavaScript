const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", "my"));

const regex = /dog/i;
console.log(paragraph.replace(regex, "ferret"));
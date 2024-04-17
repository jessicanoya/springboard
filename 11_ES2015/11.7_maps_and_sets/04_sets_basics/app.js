const bannedHashTags = new Set(["nofilter", "justsaying", "winning", "yolo"]); // Creating a set

bannedHashTags.add("bestlife");
bannedHashTags.add("yolo").add("selfie"); // Can be chained together

bannedHashTags.has("yolo"); // true
bannedHashTags.has("hello"); // false

bannedHashTags.delete("winning"); // Delete winnning from Set
bannedHashTags.clear(); // Empties the Set

function filterHashTags(tags) {
  const bannedHashTags = new Set(["nofilter", "justsaying", "winning", "yolo"]);
  return tags.filter((tag) => !bannedHashTags.has(tag));
}

const susansTags = ["happymonday", "yolo", "winning", "sunset"];

// Removing duplicates from an array
const ages = [45, 42, 21, 23, 24, 98, 2, 4, 4, 12, 3, 12, 45];
[...new Set(ages)]; // Converting it back to an array with spread

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = (strs) => {
    if (!strs.length) {
        return "";
    }

    strs.sort();

    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];

    let commonPrefix = "";
    for (let i = 0; i < firstStr.length; i++) {
        if (i < lastStr.length && firstStr[i] === lastStr[i]) {
            commonPrefix += firstStr[i];
        } else {
            break;
        }
    }

    return commonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

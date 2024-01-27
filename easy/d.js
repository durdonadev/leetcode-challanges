var strStr = function (haystack, needle) {
    const haystackLength = haystack.length;
    const needleLength = needle.length;

    for (let i = 0; i <= haystackLength - needleLength; i++) {
        let match = true;

        for (let j = 0; j < needleLength; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            return i;
        }
    }

    return -1;
};

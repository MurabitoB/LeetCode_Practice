# 觀念

移動兩邊的 index，逼近最佳解


暴力解
```javascript
var maxArea = function(height) {
    let greatest = 0;
    for (let i = 0; i < height.length; i++){
        for (let j = i + 1; j < height.length; j++){
            greatest = Math.max(greatest,  (j - i) * Math.min(height[i], height[j]));
        }
    }

    return greatest;
};
```

相較好的解
```javascript
var maxArea = function(height) {
    let maxArea = 0;
    let p1 = 0;
    let p2 = height.length - 1;

    // area = (rightIndex - leftIndex) * Math.Min(height[leftIndex], height[rightIndex])
    while (p1 < p2) {
        const currentHight = Math.min(height[p1], height[p2]);
        const width = p2 - p1;
        const area = currentHight * width;
        
        maxArea = Math.max(maxArea, area);

        if (height[p1] < height[p2]) {
            p1++;
        } else {
            p2--;
        }

    }

    return maxArea;
};
```

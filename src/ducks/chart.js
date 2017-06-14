const CREATE_CHART = "CREATE_CHART"

let initialState = {
    activeChartIndex: 0,
    charts: [{
        labels: [ "Red", "Blue", "Yellow", "Green", "Purple", "Orange" ],
        name: "Example Chart",
        datasets: [
            {
                label: "My First dataset",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    }]
}

//reducer
export default function chart(state, action) {
    switch(action.type) {

    }
    return state

}
//step 6 - detailed instructions - fix this function
function createChart(labels, name) {
    return {
        chart: { labels: labels, name: name, datasets: [] },
        type: CREATE_CHART
    }
}
function createCard(title, channel_name, views, months, duration, thumbnail) {

    let views_str = 0;
    if(views<1000000){
        views_str = views/1000 + "K";
    }
    else if(views >= 1000000){
        views_str = views/1000000 + "M";
    }


    let html = `<div class="card">
    <span class="img">
        <img src="${thumbnail}" alt="thumbnail">
        <span class="duration">${duration}</span>
    </span>
    
    <span class="title">
        ${title}
    </span>
    <span class="details">
        <span class="channelname">${channel_name} . </span>
        <span class="views">${views_str} views . </span>
        <span class="months">${months} months ago</span>
    </span>
    </div>`

    document.querySelector(".container").innerHTML =  document.querySelector(".container").innerHTML + html
}

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1","CodeWithHarry",1000000,7,"34:00","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1","CodeWithHarry",1000000,8,"34:00","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")


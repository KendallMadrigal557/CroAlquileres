<template>
    <div>
        <footer>
            <!--Template made by Pardeep Singh-->
            <p>Project made by Kendall Madrigal</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'footerComponent',
};
</script>

<style scoped>
footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background-color: #414a4f;
    padding: 60px 0;
}

footer ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 25px;
    font-size: 32px;
}

footer ul li {
    margin: 0 8px;
}

footer ul li:first-child {
    margin-left: 0;
}

footer ul li:last-child {
    margin-right: 0;
}

footer p {
    text-transform: uppercase;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 10px;
}

footer p a {
    color: #fff;
}
</style>
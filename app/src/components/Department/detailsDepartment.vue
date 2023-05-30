<template>
    <div class="container">
        <div class="img-container">
            <h3>Las 3 maravillas</h3>
                <a href="#" class="department-image">
                    <img src="../../assets/ejemplo.jpg" />
                </a>
                <div class="details">
                    <div class="meta">
                        <p>Lugar: <strong>Puntarenas, Costa Rica</strong></p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta sequi animi tempora voluptas ullam. Nulla reprehenderit alias expedita qui rem ab, incidunt hic quaerat adipisci dolorem, aspernatur saepe nihil.
                    </p>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailsDepartment',
};
</script>

<style scoped>
/* Font */
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');

/* Design */
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    background-color: #ecf9ff;
}

body {
    color: #272727;
    font-family: 'Quicksand', serif;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    padding: 1rem;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.place {
    text-align: center;
}

.img-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    background-color: #ffffff;
    border-radius: 0.95rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 1);
    overflow: hidden;
    padding: 1rem;
    width: 100%;
}

.department-image {
    display: block;
    margin-bottom: 1rem;
}

.department-image img {
    width: 100%;
    height: auto;
}

.details {
    text-align: center;
}

.details h2 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.details h2 a {
    color: #272727;
    text-decoration: none;
}

.meta {
    margin-bottom: 0.5rem;
}

.meta p {
    margin: 0;
}

.meta p strong {
    font-weight: 700;
}

.verified {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: green;
    border-radius: 50%;
    margin-left: 0.5rem;
}

.details p {
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1rem;
}

.button {
    color: #ffffff;
    padding: 0.8rem;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 400;
    display: block;
    width: 100%;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: transparent;
}

.button:hover {
    background-color: rgba(255, 255, 255, 0.12);
}
</style>
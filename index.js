function scrollProjects(direction) {
    const container = document.getElementById("project-container");
    const scrollAmount = 310;
    
    if (direction === 'left') {
        container.scrollLeft -= scrollAmount

    } else {
        container.scrollLeft += scrollAmount;
    }
            
}

function MoreInforProject(btn) {
    const projectContainer = document.getElementById('More-infor-project-container');
    projectContainer.style.display = "flex";
    let videoProject = document.querySelector('.Video_Project_More');
    let imageProject = document.querySelector('.Imagem_Project_More');
    let descriptionProject = document.querySelector('.Descricao-project');
    let linkProject = document.querySelector('.More-infor-project-container a');

    imageProject.style.display = "none";
    videoProject.style.display = "none";
    linkProject.style.display = "none";

    if (btn.value === "Project-FruderMen") {
        imageProject.src = "media/ImagemFinalGame2.png";
        imageProject.alt = "Imagem do Projeto FruderMen";
        imageProject.style.display = "block";
        descriptionProject.innerText = "Jogo FruderMen, um jogo de plataforma 2D feito com C# e Unity. O jogo é inspirado em clássicos como Super Mario, onde o jogador controla um personagem que deve superar obstáculos e inimigos para completar os níveis.";
        linkProject.innerText = "Baixar Jogo";
        linkProject.style.display = "flex";
        linkProject.innerText = "Baixar Jogo";
        linkProject.href = "https://play.google.com/store/apps/details?id=com.ARDevelopment.FruderMen.Game&pcampaignid=web_share";
    }
    if (btn.value === "Project-Auto") {
        videoProject.src = "media/20-24-41 - Trim.mp4";
        videoProject.alt = "Vídeo do Projeto Auto";
        videoProject.style.display = "block";
        descriptionProject.innerText = "Programa que automatiza uma tarefa de cadastro de produtos. O programa foi desenvolvido em Python e utiliza bibliotecas como Pyautogui para automação de .";
    }
    if (btn.value === "Project-Dados") {
        imageProject.src = "media/analise 1.png";
        imageProject.alt = "Imagem do Projeto Dados";
        imageProject.style.display = "block";
        descriptionProject.innerText = "Análise de Dados com plotly, um projeto que utiliza a biblioteca Plotly para visualização de dados. O projeto demonstra como criar gráficos interativos e visualizações de dados complexos de forma simples e eficaz.";
    }
}

function CloseMoreInforProject(btn) {
    const projectContainer = document.getElementById('More-infor-project-container');
    projectContainer.style.display = "none";
}

   
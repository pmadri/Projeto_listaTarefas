// Seleciona os elementos necessários
const form = document.getElementById('Tarefas');
const inputTarefa = document.getElementById('tarefas-add');
const listaTarefas = document.getElementById('lista-tarefas');
const limparTarefaBtn = document.getElementById('limpar-tarefa-btn');
const pendentes = document.getElementById('pendentes');
const concluidas = document.getElementById('concluidas');

// Variáveis para contagem de tarefas
let tarefasPendentes = 0;
let tarefasConcluidas = 0;

// Atualiza a contagem de tarefas
function atualizarContagem() {
    pendentes.textContent = `Pendentes: ${tarefasPendentes}`;
    concluidas.textContent = `Concluídas: ${tarefasConcluidas}`;
}

// Adiciona uma nova tarefa
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tarefaTexto = inputTarefa.value.trim();
    if (tarefaTexto === '') return;

    // Cria um novo item de lista
    const li = document.createElement('li');
    li.textContent = tarefaTexto;

    // Adiciona um botão para marcar como concluído
    const concluirBtn = document.createElement('button');
    concluirBtn.textContent = 'Concluir';
    concluirBtn.style.marginLeft = '10px';
    concluirBtn.addEventListener('click', () => {
        li.style.textDecoration = 'line-through';
        li.style.color = 'gray';
        concluirBtn.disabled = true;
        tarefasPendentes--;
        tarefasConcluidas++;
        atualizarContagem();
    });

    li.appendChild(concluirBtn);
    listaTarefas.appendChild(li);

    // Incrementa as tarefas pendentes
    tarefasPendentes++;
    atualizarContagem();

    // Limpa o campo de entrada
    inputTarefa.value = '';
});

// Limpa todas as tarefas
limparTarefaBtn.addEventListener('click', () => {
    listaTarefas.innerHTML = '';
    tarefasPendentes = 0;
    tarefasConcluidas = 0;
    atualizarContagem();
});

// Inicializa a contagem
atualizarContagem();
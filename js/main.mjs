import { bubbleSort } from './bubble_sort.mjs';

const alunos = JSON.parse(localStorage.getItem('alunos')) || [];

document.getElementById('alunoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const ra = document.getElementById('ra').value;
    const media = parseFloat(document.getElementById('media').value);
    const resultado = media >= 6 ? 'Aprovado' : 'Reprovado';

    // Verifica se já existe um aluno com o mesmo RA
    const alunoExistente = alunos.find(aluno => aluno.ra === ra);
    if (alunoExistente) {
        alert('Este aluno já está cadastrado!');
        return; // Impede o cadastro de um aluno com RA repetido
    }


    const aluno = { nome, ra, media, resultado };
    alunos.push(aluno);

    salvarAlunos();
    atualizarTabela();
    document.getElementById('alunoForm').reset();
});

function atualizarTabela(data = alunos) {
    const tbody = document.querySelector('#alunosTable tbody');
    tbody.innerHTML = '';

    data.forEach((aluno, index) => {
        const tr = document.createElement('tr');

        Object.values(aluno).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });

        // Botão Editar
        const tdEditar = document.createElement('td');
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.classList.add('edit');
        btnEditar.addEventListener('click', () => editarAluno(index));
        tdEditar.appendChild(btnEditar);
        tr.appendChild(tdEditar);

        // Botão Deletar
        const tdDeletar = document.createElement('td');
        const btnDeletar = document.createElement('button');
        btnDeletar.textContent = 'Deletar';
        btnDeletar.classList.add('delete');
        btnDeletar.addEventListener('click', () => deletarAluno(index));
        tdDeletar.appendChild(btnDeletar);
        tr.appendChild(tdDeletar);

        tbody.appendChild(tr);
    });
}

function editarAluno(index) {
    if (confirm('Você tem certeza de que deseja editar este aluno?')) {
        const aluno = alunos[index];
        document.getElementById('nome').value = aluno.nome;
        document.getElementById('ra').value = aluno.ra;
        document.getElementById('media').value = aluno.media;

        // Remove o aluno atual e atualiza a tabela
        alunos.splice(index, 1);
        salvarAlunos();
        atualizarTabela();
    }
}

function deletarAluno(index) {
    if (confirm('Você tem certeza de que deseja deletar este aluno?')) {
        alunos.splice(index, 1);
        salvarAlunos();
        atualizarTabela();
    }
}

function salvarAlunos() {
    localStorage.setItem('alunos', JSON.stringify(alunos));
}

function carregarAlunos() {
    atualizarTabela();
}

// Ordenações
document.getElementById('ordenarNome').addEventListener('click', function () {
    bubbleSort(alunos, (a, b) => a.nome > b.nome);
    salvarAlunos();
    atualizarTabela();
});

document.getElementById('ordenarRA').addEventListener('click', function () {
    bubbleSort(alunos, (a, b) => a.ra < b.ra);
    salvarAlunos();
    atualizarTabela();
});

document.getElementById('ordenarAprovados').addEventListener('click', function () {
    const aprovados = alunos.filter(aluno => aluno.resultado === 'Aprovado');
    bubbleSort(aprovados, (a, b) => a.nome > b.nome);
    atualizarTabela(aprovados);
});

document.getElementById('salvarJson').addEventListener('click', function () {
    const json = JSON.stringify(alunos, null, 2); // Converte os alunos para JSON com formatação
    const blob = new Blob([json], { type: 'application/json' }); // Define o tipo como JSON
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'alunos.json'; // Altera a extensão para .json
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('inputImportacao').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            try {
                const dados = JSON.parse(e.target.result); // Converte o conteúdo do arquivo para objeto
                if (Array.isArray(dados)) {
                    // Adiciona os alunos importados à lista existente
                    dados.forEach(aluno => {
                        // Verifica se o aluno já existe pelo RA antes de adicionar
                        const alunoExistente = alunos.find(a => a.ra === aluno.ra);
                        if (!alunoExistente) {
                            alunos.push(aluno);
                        }
                    });
                    salvarAlunos(); // Salva os alunos atualizados no localStorage
                    atualizarTabela(); // Atualiza a tabela para mostrar os alunos
                } else {
                    alert('O arquivo JSON deve conter um array de alunos.');
                }
            } catch (error) {
                alert('Erro ao ler o arquivo JSON: ' + error.message);
            }
        };

        reader.readAsText(file); // Lê o arquivo como texto
    }
});


carregarAlunos();

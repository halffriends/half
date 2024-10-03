// 替换为您的实际笔记数据
const notes = [
    { 
        title: "我的第一个笔记", 
        content: "这是我的第一个笔记的内容。可以包含多行文本，甚至可以包含简单的Markdown格式。"
    },
    { 
        title: "今天的想法", 
        content: "今天我学到了很多关于网页开发的知识。\n\n- HTML用于结构\n- CSS用于样式\n- JavaScript用于交互" 
    },
    { 
        title: "待办事项", 
        content: "1. 完成网页设计\n2. 学习更多JavaScript\n3. 整理Obsidian笔记" 
    }
];

function loadNotes() {
    const notesList = document.getElementById('notesList');
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note.title;
        li.onclick = () => displayNote(index);
        notesList.appendChild(li);
    });
}

function displayNote(index) {
    const noteContent = document.getElementById('noteContent');
    noteContent.innerHTML = `<h2>${notes[index].title}</h2><pre>${notes[index].content}</pre>`;
}

window.onload = loadNotes;
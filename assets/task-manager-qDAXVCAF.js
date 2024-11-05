class c{constructor(){this.tasks=[],this.currentTaskId=null,this.modalEscapeListener=null,this.loadTheme(),this.loadTasks().then(()=>{this.init()})}async loadTasks(){try{const e=await(await fetch("../data/task-manager.json")).json();this.tasks=e.tasks||[],this.renderTasks()}catch(t){console.error("Error loading tasks:",t),this.tasks=[]}}async saveTasks(){try{const t={tasks:this.tasks};if(!(await fetch("/api/save-tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)throw new Error("Failed to save tasks");console.log("Tasks saved successfully")}catch(t){console.error("Error saving tasks:",t)}}init(){this.setupEventListeners(),this.renderTasks(),this.setupDragAndDrop()}setupEventListeners(){console.log("Setting up event listeners");const t=document.getElementById("addTaskBtn");console.log("Add button:",t),t.addEventListener("click",()=>{console.log("Add button clicked"),this.currentTaskId=null,this.showModal()}),document.querySelector(".close").addEventListener("click",()=>{this.hideModal()}),document.getElementById("taskForm").addEventListener("submit",s=>{s.preventDefault(),this.handleFormSubmit()}),document.getElementById("themeToggleBtn").addEventListener("click",()=>{this.toggleTheme()}),document.getElementById("taskNumber").addEventListener("input",s=>{this.handleTaskNumberInput(s.target.value)}),document.addEventListener("click",s=>{s.target.closest(".task-number-container")||(document.getElementById("taskNumberSuggestions").style.display="none")}),document.getElementById("addAssigneeBtn").addEventListener("click",()=>{this.addAssigneeField()}),document.getElementById("assigneesList").addEventListener("click",s=>{if(s.target.classList.contains("remove-assignee-btn")){const n=s.target.closest(".assignee-item");n&&document.querySelectorAll(".assignee-item").length>1&&n.remove()}}),document.getElementById("addSubtaskBtn").addEventListener("click",()=>{this.addSubtaskField()}),document.getElementById("subtasksList").addEventListener("click",s=>{s.target.classList.contains("remove-subtask-btn")&&s.target.closest(".subtask-item").remove()})}addAssigneeField(){document.getElementById("assigneesList").appendChild(this.createAssigneeItem("empty"))}addSubtaskField(t="",e=!1){const s=document.getElementById("subtasksList"),n=document.createElement("div");n.className="subtask-item",n.innerHTML=`
            <input type="checkbox" class="subtask-checkbox" ${e?"checked":""}>
            <input type="text" class="subtask-text" value="${t}" placeholder="Введите подзадачу">
            <button type="button" class="remove-subtask-btn">×</button>
        `,s.appendChild(n)}handleTaskNumberInput(t){const e=document.getElementById("taskNumberSuggestions"),s=document.getElementById("taskNumber");if(!t){s.classList.remove("exists","available"),e.style.display="none";return}const n=this.tasks.map(r=>r.taskNumber).filter(r=>r).sort((r,i)=>r-i),a=n.includes(t);if(s.classList.toggle("exists",a),s.classList.toggle("available",!a&&t.length>0),t.length>0){const r=n.filter(i=>i.toString().includes(t)).slice(0,5);r.length>0?(e.innerHTML=r.map(i=>`
                        <div class="suggestion-item" onclick="window.taskManager.selectTaskNumber('${i}')">
                            ${i}
                        </div>
                    `).join(""),e.style.display="block"):e.style.display="none"}else e.style.display="none"}selectTaskNumber(t){document.getElementById("taskNumber").value=t,document.getElementById("taskNumberSuggestions").style.display="none"}showModal(t=null){var i;const e=document.getElementById("taskModal"),s=document.getElementById("taskForm"),n=document.getElementById("assigneesList"),a=e.querySelector(".delete-task-btn");a.style.display=t?"block":"none",n.innerHTML="";const r=document.getElementById("subtasksList");if(r.innerHTML="",t){const o=this.tasks.find(d=>d.id===t);o&&(s.taskNumber.value=o.taskNumber||"",s.taskTitle.value=o.title,s.taskDescription.value=o.description,s.taskCategory.value=o.category,s.taskPriority.value=o.priorityStatus,s.taskStatus.value=o.progressStatus,(o.assignees||[o.assignee||"empty"]).forEach(l=>{n.appendChild(this.createAssigneeItem(l))}),(i=o.subtasks)==null||i.forEach(l=>{this.addSubtaskField(l.text,l.completed)}),this.currentTaskId=t)}else s.reset(),s.taskCategory.value="Must_Have",n.appendChild(this.createAssigneeItem("empty"));e.style.display="block",a.onclick=()=>this.showDeleteConfirmation(t),this.modalEscapeListener=o=>{o.key==="Escape"&&this.hideModal()},document.addEventListener("keydown",this.modalEscapeListener),e.addEventListener("click",o=>{o.target===e&&this.hideModal()})}showDeleteConfirmation(t){const e=document.getElementById("deleteConfirmModal");e.style.display="block";const s=()=>{this.deleteTask(t),e.style.display="none",this.hideModal(),i()},n=()=>{e.style.display="none",i()},a=o=>{o.target===e&&(e.style.display="none",i())},r=o=>{o.key==="Escape"&&(e.style.display="none",i())},i=()=>{document.getElementById("confirmDelete").removeEventListener("click",s),document.getElementById("cancelDelete").removeEventListener("click",n),e.removeEventListener("click",a),document.removeEventListener("keydown",r)};document.getElementById("confirmDelete").addEventListener("click",s),document.getElementById("cancelDelete").addEventListener("click",n),e.addEventListener("click",a),document.addEventListener("keydown",r)}hideModal(){const t=document.getElementById("taskModal");t.style.display="none",this.modalEscapeListener&&(document.removeEventListener("keydown",this.modalEscapeListener),this.modalEscapeListener=null)}handleFormSubmit(){const t=document.getElementById("taskForm"),e=Array.from(t.querySelectorAll(".subtask-item")).map(a=>({id:Date.now()+Math.random().toString(36).substr(2,9),text:a.querySelector(".subtask-text").value,completed:a.querySelector(".subtask-checkbox").checked})),s=Array.from(t.querySelectorAll(".taskAssignee")).map(a=>a.value).filter(a=>a!=="empty"),n={title:t.taskTitle.value,taskNumber:t.taskNumber.value||null,description:t.taskDescription.value,category:t.taskCategory.value,priorityStatus:t.taskPriority.value,progressStatus:t.taskStatus.value,assignees:s,subtasks:e};if(n.taskNumber&&this.tasks.some(r=>r.taskNumber===n.taskNumber&&r.id!==this.currentTaskId)){alert("Задача с таким номером уже существует!");return}this.currentTaskId?this.updateTask(this.currentTaskId,n):this.addTask(n),this.hideModal(),this.renderTasks()}addTask(t){const e={id:Date.now().toString(),taskNumber:t.taskNumber||null,title:t.title,description:t.description,category:t.category||"Must_Have",priorityStatus:t.priorityStatus,progressStatus:t.progressStatus,assignees:t.assignees,subtasks:t.subtasks||[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};console.log("New task:",e),this.tasks.push(e),this.saveTasks()}updateTask(t,e){const s=this.tasks.findIndex(n=>n.id===t);s!==-1&&(this.tasks[s]={...this.tasks[s],taskNumber:e.taskNumber,title:e.title,description:e.description,category:e.category,priorityStatus:e.priorityStatus,progressStatus:e.progressStatus,assignees:e.assignees,subtasks:e.subtasks,updatedAt:new Date().toISOString()},this.saveTasks())}deleteTask(t){this.tasks=this.tasks.filter(e=>e.id!==t),this.saveTasks(),this.renderTasks()}renderTasks(){document.querySelectorAll(".drop-zone").forEach(s=>{s.innerHTML=""}),this.tasks.forEach(s=>{!s.assignees&&s.assignee&&(s.assignees=[s.assignee],delete s.assignee);const n=this.createTaskElement(s),a=document.querySelector(`.drop-zone[data-priority="${s.priorityStatus}"][data-status="${s.progressStatus}"]`);a&&a.appendChild(n)});const t=document.querySelector(".must-have-grid");if(t){t.innerHTML="";const s=this.tasks.filter(a=>a.category==="Must_Have"),n=this.groupTasksByAssignee(s);this.renderGroupedTasks(n,t)}const e=document.querySelector(".upgrade-grid");if(e){e.innerHTML="";const s=this.tasks.filter(a=>a.category==="Upgrade"),n=this.groupTasksByAssignee(s);this.renderGroupedTasks(n,e)}}createTaskElement(t){var n;const e=document.createElement("div");e.className="task-card",e.draggable=!0,e.dataset.taskId=t.id;const s=t.assignees||[t.assignee||"empty"];if(e.innerHTML=`
            <div class="task-card-header">
                <div class="task-left">
                    <h4 class="task-title">${t.title}</h4>
                    <div class="task-number">
                        #${t.taskNumber||t.id.slice(-4)}
                    </div>
                    <p class="task-description">${t.description}</p>
                </div>
                <div class="task-right">
                    <div class="assignees-list">
                        ${s.map(a=>`
                            <div class="assignee-badge">${a}</div>
                        `).join("")}
                    </div>
                    <div class="task-status-badge">${t.progressStatus}</div>
                    <div class="category-badge" data-category="${t.category}">${t.category}</div>
                </div>
            </div>
        `,((n=t.subtasks)==null?void 0:n.length)>0){const a=t.subtasks.filter(i=>i.completed).length,r=t.subtasks.length;e.querySelector(".task-left").insertAdjacentHTML("beforeend",`
                <div class="subtasks-progress">
                    ${a}/${r}
                </div>
            `)}return e.addEventListener("click",()=>this.showModal(t.id)),e}setupDragAndDrop(){console.log("Setting up drag and drop"),document.addEventListener("dragstart",e=>{console.log("Drag started:",e.target),e.target.classList.contains("task-card")&&(e.target.classList.add("dragging"),e.dataTransfer.setData("text/plain",e.target.dataset.taskId))}),document.addEventListener("dragend",e=>{e.target.classList.contains("task-card")&&e.target.classList.remove("dragging")}),document.querySelectorAll(".drop-zone").forEach(e=>{e.addEventListener("dragover",s=>{s.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragleave",s=>{e.classList.remove("dragover")}),e.addEventListener("drop",s=>{s.preventDefault(),e.classList.remove("dragover");const n=s.dataTransfer.getData("text/plain"),a=this.tasks.find(r=>r.id===n);a&&(!a.assignees&&a.assignee&&(a.assignees=[a.assignee],delete a.assignee),a.priorityStatus=e.dataset.priority,a.progressStatus=e.dataset.status,a.updatedAt=new Date().toISOString(),this.saveTasks(),this.renderTasks())})})}loadTheme(){const t=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",t)}toggleTheme(){const e=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)}groupTasksByAssignee(t){const e={};return t.forEach(s=>{(s.assignees||[s.assignee||"empty"]).forEach(a=>{e[a]||(e[a]=[]),e[a].includes(s)||e[a].push(s)})}),e}renderGroupedTasks(t,e){Object.entries(t).forEach(([s,n])=>{const a=document.createElement("div");a.className="task-assignee",a.innerHTML=`
                <div class="assignee-name ${s==="empty"?"empty-assignee":""}">
                    ${s}
                </div>
                ${n.map(i=>`
                    <div class="task-status" data-task-id="${i.id}">${i.progressStatus}</div>
                `).join("")}
            `,a.addEventListener("click",i=>{const o=i.target.dataset.taskId;o&&this.showModal(o)}),e.appendChild(a);const r=document.createElement("div");r.className="task-content",r.innerHTML=n.map(i=>`
                <div class="task-item" data-task-id="${i.id}">
                    <h4>${i.title}</h4>
                    <div class="task-assignees">
                        ${(i.assignees||[i.assignee||"empty"]).map(o=>`
                            <span class="assignee-badge">${o}</span>
                        `).join("")}
                    </div>
                    <p>${i.description}</p>
                </div>
            `).join(""),r.addEventListener("click",i=>{const o=i.target.closest(".task-item");if(o){const d=o.dataset.taskId;this.showModal(d)}}),e.appendChild(r)})}createAssigneeSelect(){return`
            <select class="taskAssignee" required>
                <option value="empty">Empty</option>
                <option value="Andrii Sushylnikov">Andrii Sushylnikov</option>
                <option value="Daria Honcharuk">Daria Honcharuk</option>
                <option value="Dmytro Mayevsky">Dmytro Mayevsky</option>
                <option value="Maks Ki">Maks Ki</option>
                <option value="Mariia Sv.">Mariia Sv.</option>
                <option value="Roman Turas">Roman Turas</option>
                <option value="Viktoriia Didenko">Viktoriia Didenko</option>
                <option value="Hryhorii Chernysh">Hryhorii Chernysh (Mentor)</option>
                <option value="Daria">Daria (client manager)</option>
                <option value="Lesya Katanova">Lesya Katanova</option>
                <option value="Olena Deineha">Olena Deineha</option>
            </select>
        `}createAssigneeItem(t="empty"){const e=document.createElement("div");return e.className="assignee-item",e.innerHTML=`
            ${this.createAssigneeSelect()}
            <button type="button" class="remove-assignee-btn">×</button>
        `,e.querySelector("select").value=t,e}}document.addEventListener("DOMContentLoaded",()=>{window.taskManager=new c});
//# sourceMappingURL=task-manager-qDAXVCAF.js.map

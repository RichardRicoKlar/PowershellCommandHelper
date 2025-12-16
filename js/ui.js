import { buildCommand } from "./builder.js";

export function populateCommandTypes(categories) {
    const container = document.getElementById("command-type");
    container.innerHTML = "";

    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat.Name;
        btn.addEventListener("click", () => {
            renderCommandSelector(cat);
        });
        container.appendChild(btn);
    });
}

export function renderCommandSelector(category) {
    const container = document.getElementById("command-selector");
    container.style.display = "block";
    container.innerHTML = "";

    const commands = Object.values(category.Content);

    commands.forEach(cmd => {
        const btn = document.createElement("button");
        btn.textContent = cmd.title;
        btn.addEventListener("click", () => renderForm(cmd));
        container.appendChild(btn);
    });
}

export function renderForm(command) {
    const formContainer = document.getElementById("formContainer");
    formContainer.style.display = "block";
    formContainer.innerHTML = "";

    command.parameters.forEach(param => {
        const wrapper = document.createElement("div");

        const label = document.createElement("label");
        label.textContent = param.label;
        wrapper.appendChild(label);

        let input;
        if (param.type === "select") {
            input = document.createElement("select");
            param.options.forEach(opt => {
                const option = document.createElement("option");
                option.value = opt;
                option.textContent = opt;
                input.appendChild(option);
            });
        } else {
            input = document.createElement("input");
            input.type = param.type;
            if (param.placeholder) input.placeholder = param.placeholder;
        }

        input.id = param.name;
        wrapper.appendChild(input);
        formContainer.appendChild(wrapper);
    });

    const generateBtn = document.createElement("button");
    generateBtn.textContent = "Generate Command";
    generateBtn.addEventListener("click", () => {
        const cmd = buildCommand(command);
        const output = document.getElementById("output");
        output.textContent = cmd;
        output.style.display = "block";
    });
    formContainer.appendChild(generateBtn);
}

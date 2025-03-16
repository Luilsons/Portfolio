document.addEventListener("DOMContentLoaded", function () {
    const portfolioGrid = document.getElementById("portfolioGrid");

    if (!portfolioGrid) {
        console.error("Error: Element not found in DOM.");
        return;
    }

    fetch("./data/projects.json")
        .then(response => response.json())
        .then(projects => {
            Object.entries(projects).forEach(([key, project]) => {
                const projectCard = document.createElement("div");

                if (key === "capstone") {
                    projectCard.classList.add("portfolio__card", "expand-div");
                    projectCard.innerHTML = `
                      <img src="${project.img_path}" alt="portfolio" class="capstone-img" />
                      <div class="capstone-overlay">
                          <div class="overlay-container hover-div">
                              <p class="overlay__title justify-center">${project.title}</p>
                              <p>${project.bio}</p>
                              <p class="overlay__text p-gap">Project Vision</p>
                              <p>${project.expanded_view.project_vision}</p>
                              <p class="overlay__text p-gap">Business Requirements</p>
                              <ul class="capstone__list">
                                  ${project.expanded_view.business_requirements.map(req => `<li><p>${req}</p></li>`).join('')}
                              </ul>
                              <p class="overlay__text p-gap">Project Plan</p>
                              <ul class="capstone__list">
                                  <li><p>Planned Start Date: ${project.expanded_view.project_plan.start_date}</p></li>
                                  <li><p>Planned End Date: ${project.expanded_view.project_plan.end_date}</p></li>
                              </ul>
                              <p class="overlay__text p-gap fw-500 ml-15">Development Phases</p>
                              <ul class="capstone__list ml-15">
                                  ${project.expanded_view.development_phases.map(phase => `<li><p>${phase}</p></li>`).join('')}
                              </ul>
                              <p class="overlay__text p-gap fw-500 ml-15">Technology Stack</p>
                              <ul class="capstone__list ml-15">
                                  <li><p>Frontend: ${project.expanded_view.technology_stack.frontend}</p></li>
                                  <li><p>Backend: ${project.expanded_view.technology_stack.backend}</p></li>
                                  <li><p>Database: ${project.expanded_view.technology_stack.database}</p></li>
                                  <li><p>API: ${project.expanded_view.technology_stack.api}</p></li>
                              </ul>
                              <p class="overlay__text p-gap fw-500 ml-15">System Architecture</p>
                              <ul class="capstone__list ml-15">
                                  ${project.expanded_view.system_architecture.map(arch => `<li><p>${arch}</p></li>`).join('')}
                              </ul>
                              <p class="overlay__text p-gap">Wireframes/Mockups</p>
                              <ul class="capstone__list ml-15">
                                  ${project.expanded_view.wireframes.map(wire => `<li><p>${wire}</p></li>`).join('')}
                              </ul>
                              <p class="overlay__text p-gap">Status Reports</p>
                              <p class="overlay__text p-gap fw-500 ml-15">Progress Reports</p>
                              <ul class="capstone__list ml-15">
                                  ${project.expanded_view.status_reports.progress_reports.map(report => `<li><p>${report}</p></li>`).join('')}
                              </ul>
                              <p class="overlay__text p-gap fw-500 ml-15">Pending Tasks</p>
                              <ul class="capstone__list ml-15">
                                  ${project.expanded_view.status_reports.pending_tasks.map(task => `<li><p>${task}</p></li>`).join('')}
                              </ul>
                          </div>
                          <div class="header__btn">
                              <a class="btn-hover" href="${project.github_url}" target="_blank" rel="noopener noreferrer">See on GitHub</a>
                          </div>
                      </div>
                  `;
                } else {
                    projectCard.classList.add("portfolio__card");
                    projectCard.innerHTML = `
                      <img src="${project.img_path}" alt="portfolio" />
                      <div class="overlay">
                          <div class="overlay-container">
                              <p class="overlay__title justify-center">${project.title}</p>
                              <p>${project.bio}</p>
                              <p class="overlay__text p-gap">Core Technologies</p>
                              <ul class="techs">
                                  ${project.core_tech.map(tech => `<li><p>${tech}</p></li>`).join('')}
                              </ul>
                          </div>
                          <div class="header__btn">
                              <a class="btn-hover" href="${project.github_url}" target="_blank" rel="noopener noreferrer">See on GitHub</a>
                          </div>
                      </div>
                  `;
                }
                portfolioGrid.appendChild(projectCard);
            });
        })
        .catch(error => console.error("Error at projects load:", error));
});

let project = new Project('ImGuiDemo');
project.addSources('Sources');
project.addShaders('Sources/Shaders/**');
project.addLibrary('linc_imgui');
resolve(project);

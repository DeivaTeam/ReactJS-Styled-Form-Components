please clone the styled-components-Forms project by doing:

git clone https://github.com/DeivaTeam/Styled_Components_Form.git
cd Styled_Components_Form

Install all dependencies & Start developing
npm install
npm start


Forms using Styled-Components
1. Styled-Components is a new CSS tool, created by Max Stoiber and Glen Maddern, which helps you organize CSS in your React project. It also works well with React Native. In this article, I will walk you through the main concepts of Styled-Components along with coding examples.

2. Three main goals of Styled-Components
First of all, let us talk about the purpose of Styles-Components and the benefits you will gain from using it.

3. Getting rid of the mapping between styles and components? Most of the time, a dumb component always has its own small style.css file related. So, you need to create two files every time you want to create the dumb component. This seems to be fine at the beginning, however, when your project is getting bigger, you will end-up with a whole bunch of files. Styled-Components allows you to write CSS directly inside your component, which perfectly solved this problem.
Building small and reusable components? Small components can easily be reused and tested. By using Styled-Components, you can easily build a small component and extend its capability with props.

4. Reducing the risk of specificity clash? Everyone might have encounter the specificity clash problem before. For example, you just wanted to add a margin to a specific paragraph, but it unintentionally impacts the other paragraphs. You can easily solve this problem by applying a CSS class only once. Styled-Components is actually doing this for us. It automatically generates a unique class name and pass it to our component.



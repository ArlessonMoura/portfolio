# Welcome to my portfolio :heart_eyes:
Inicial state of build (Starts at 07/13. man at work :warning:)

### This app consists in a bilingual single page application made with vanilla Javascript (ooh yeah, handmade old fashion code :satisfied:)...
### My premises for choose the condictions to development this webpage are:
- [] Enhancer/Show JavaScript and DOM manipulate skills through  hard work with pure JavaScript;
- [] Enhancer/Show Semantic HTML;
- [] Enhancer/Show good CSS skills whith responsivity, animations and UX/UI, through hard work no lib CSS.
- [] Enhancer/Show best pratices for software development Clean Code.

### This is the diagram of components relationship.
```mermaid
graph LR

A[Pages] -- Local<br> HTML and<br> CSS ---> B[router]
B -- Fetch Content --> A
B -- Dinamic Content<br> to render based<br> on event listener ---> C{root HTML:<br> Metadata<br> +<br> render Body}
C -- event with URL<br> value requisition --> B
D((root CSS<br> and JS)) -- i18n<br> memory state<br> unified CSS --> C
B -- adicional Style<br> based event requisition --> D
C --> E[Browser<br> Render]

```

### Acess my app on Heroku: https://arlesson-portfolio.herokuapp.com

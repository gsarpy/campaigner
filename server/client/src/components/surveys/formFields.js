export default [
  {
    label: 'Survey Title',
    defaultText: 'Give your survey a neat title!',
    name: 'title',
    noValueError: ' You Must Provide a Title',
  },
  {
    label: 'Subject Line',
    defaultText: 'The email subject your recipients will see',
    name: 'subject',
    noValueError: ' You Must Provide a Subject Line',
  },
  {
    label: 'Message Body',
    defaultText: 'Introduce this survey and ask a yes or no question',
    name: 'body',
    noValueError: ' You Must Provide an Email Body',
  },
  {
    label: 'Recipients List',
    defaultText: 'Comma separated email list',
    name: 'recipients',
    noValueError: ' You Must Provide At Least One Email',
  },
];

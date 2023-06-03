interface IField {
    name: string;
    type: string;
}

interface ICliArguments {
    name: string;
    fields: string;
    help?: boolean;
}

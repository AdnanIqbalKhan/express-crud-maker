import { parse } from 'ts-command-line-args';

const parseFields = (input: string) => input.split(",").map(k => {
    const [name, type] = k.split(":")
    return {
        name, type
    } as IField
})

const getArgs = () => {
    const args = parse<ICliArguments>(
        {
            name: { type: String, alias: 'n', description: 'Model Name' },
            fields: { type: String, alias: 'f', description: 'Model fields with types e.g. title:string,createdAt:date' },
            help: { type: Boolean, optional: true, alias: 'h', description: 'Prints this usage guide' },
        },
        {
            helpArg: 'help',
            headerContentSections: [
                { header: 'Package', content: process.env.npm_package_name },
                { header: 'Version', content: process.env.npm_package_version },
                { header: 'My Example Config', content: 'Thanks for using Our Awesome Library' }
            ],
            footerContentSections: [{ header: 'Author', content: `https://github.com/AdnanIqbalKhan` }],
        }
    )



    return {
        ...args,
        fields: parseFields(args.fields)
    }
};

export default getArgs
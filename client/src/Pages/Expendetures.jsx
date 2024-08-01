    import {
        Card,
        Input,
        Checkbox,
        Button,
        Typography,
    } from "@material-tailwind/react";
    
    export  default function Expendetures() {
        return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
            Add class
            </Typography>

            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                Class
                </Typography>
                <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                Sub Class
                </Typography>
                <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
                />

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                Description
                </Typography>
                <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
                />
                
            </div>
            
        
            <Button className="mt-6" fullWidth>
                sign up
            </Button>
            
            </form>
        </Card>
        );
    }
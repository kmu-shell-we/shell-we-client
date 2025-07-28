import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import {ButtonHTMLAttributes, forwardRef} from "react";

const buttonVariant = cva(
    "font-normal rounded-xl flex gap-2 item-center",
    {
        variants:{
            color:{
                primary: 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed disabled:pointer-events-none',
                secondary: 'bg-neutral-700 text-white hover:bg-neutral-700 disabled:bg-neutral-500 disabled:cursor-not-allowed disabled:pointer-events-none',
                success: 'bg-green-500 text-white hover:bg-green-600 disabled:bg-green-400 disabled:cursor-not-allowed disabled:pointer-events-none',
                warning: 'bg-amber-500 text-black hover:bg-amber-600 disabled:bg-amber-400 disabled:cursor-not-allowed disabled:pointer-events-none',
                error: 'bg-red-500 text-white hover:bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed disabled:pointer-events-none',
                white: 'bg-white text-blue-900 hover:bg-neutral-50 disabled:bg-neutral-200 disabled:cursor-not-allowed disabled:pointer-events-none'
            },
            size:{
                small: 'text-sm px-4 py-2',
                default: 'text-base px-5 py-2.5',
                large: 'text-lg px-6 py-3'
            },
            icon:{
                no: '',
                only: 'flex items-center px-2.5 py-2.5'
            },
            outlined:{
                true:'',
                false:''
            }
        },
        compoundVariants:[
            // primary 색상 outlined
            {
                outlined: true,
                color: 'primary',
                class: 'bg-white text-blue-900 hover:bg-blue-50 border border-blue-500 disabled:bg-blue-100 disabled:cursor-not-allowed disabled:pointer-events-none'
            },
            // secondary 색상 outlined
            {
                outlined: true,
                color: 'secondary',
                class: 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-700 disabled:bg-neutral-100 disabled:cursor-not-allowed disabled:pointer-events-none'
            },
            // success 색상 outlined
            {
                outlined: true,
                color: 'success',
                class: 'bg-white text-green-500 hover:bg-green-50 border border-green-500 disabled:bg-green-100 disabled:cursor-not-allowed disabled:pointer-events-none'
            },
            // warning 색상 outlined
            {
                outlined: true,
                color: 'warning',
                class: 'bg-white text-amber-500 hover:bg-amber-50 border border-amber-500 disabled:bg-amber-100 disabled:cursor-not-allowed disabled:pointer-events-none'
            },
            // error 색상 outlined
            {
                outlined: true,
                color: 'error',
                class: 'bg-white text-red-500 hover:bg-red-50 border border-red-500 disabled:bg-red-100 disabled:cursor-not-allowed disabled:pointer-events-none'
            }

        ]
    }
)

type ButtonProps = VariantProps<typeof buttonVariant> & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement,ButtonProps>(
    ({className,color,size,icon,outlined,...props},ref)=>{
        return(
            <button
                ref={ref}
                className={cn(buttonVariant({color,size,icon,outlined}),className)}
                {...props}
            >
            </button>
        )
    }
)
export default Button;
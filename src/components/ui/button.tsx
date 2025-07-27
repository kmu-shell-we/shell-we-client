import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import {ButtonHTMLAttributes, forwardRef} from "react";

const buttonVariant = cva(
    "font-normal rounded-xl leading-none",
    {
        variants:{
            color:{
                primary: 'bg-blue-500 text-white hover:bg-blue-600',
                secondary: 'bg-neutral-700 text-white hover:bg-neutral-700',
                success: 'bg-green-500 text-white hover:bg-green-600',
                warning: 'bg-amber-500 text-black hover:bg-amber-600',
                error: 'bg-red-500 text-white hover:bg-red-600',
                white: 'bg-white text-blue-900 hover:bg-neutral-50'
            },
            size:{
                small: 'text-sm px-4 py-2',
                default: 'text-base px-5 py-2.5',
                large: 'text-lg px-6 py-3'
            },
            icon:{
                no: '',
                left: 'flex flex-row-reverse items-center gap-2',
                right: 'flex items-center gap-2',
                only: 'flex items-center px-2.5 py-2.5 leading-none text-[0]'
            },
            state:{
                default: '',
                disabled: 'opacity-50 cursor-not-allowed pointer-events-none'
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
                class: 'bg-white text-blue-900 hover:bg-blue-50 border border-blue-500'
            },
            {
                outlined: true,
                color: 'primary',
                state:'disabled',
                class: 'bg-blue-100 text-blue-900 border border-blue-500'
            },
            // secondary 색상 outlined
            {
                outlined: true,
                color: 'secondary',
                class: 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-700'
            },
            {
                outlined: true,
                color: 'secondary',
                state:'disabled',
                class: 'bg-neutral-100 text-neutral-700 border border-neutral-700'
            },
            // success 색상 outlined
            {
                outlined: true,
                color: 'success',
                class: 'bg-white text-green-500 hover:bg-green-50 border border-green-500'
            },
            {
                outlined: true,
                color: 'success',
                state:'disabled',
                class: 'bg-green-100 text-green-500 border border-green-500'
            },
            // warning 색상 outlined
            {
                outlined: true,
                color: 'warning',
                class: 'bg-white text-amber-500 hover:bg-amber-50 border border-amber-500'
            },
            {
                outlined: true,
                color: 'warning',
                state:'disabled',
                class: 'bg-amber-100 text-amber-500 border border-amber-500'
            },
            // error 색상 outlined
            {
                outlined: true,
                color: 'error',
                class: 'bg-white text-red-500 hover:bg-red-50 border border-red-500'
            },
            {
                outlined: true,
                color: 'error',
                state:'disabled',
                class: 'bg-red-100 text-red-500 border border-red-500'
            }

        ]
    }
)

type ButtonProps = VariantProps<typeof buttonVariant> & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement,ButtonProps>(
    ({className,color,size,icon,state,outlined,...props},ref)=>{
        return(
            <button
                ref={ref}
                className={cn(buttonVariant({color,size,icon,state,outlined}),className)}
                {...props}
            >
            </button>
        )
    }
)
export default Button;
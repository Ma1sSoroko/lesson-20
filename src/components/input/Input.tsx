import React, { forwardRef } from 'react'

type InputType = 'text' | 'email' | 'password' | 'textarea' | 'checkbox' | 'number'
interface InputProps {
    type: InputType
    id?: string
    label?: string
    name?: string
    checked?: boolean
    placeholder?: string
    className?: string
    value?: string
    rows?: number
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function InputBase(props: InputProps, ref: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>): React.ReactElement {
    const { type, id, label, name, checked, placeholder, className, value, onChange, rows } = props

    const renderLabel = (): React.ReactElement | null => {
        if (!label) return null

        return (
            <label className="form-check-label" htmlFor={id}>{label}</label>
        )
    }

    if (type === 'textarea') {
        return (
            <>
                {renderLabel()}
                <textarea
                    ref={ref}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className={className || 'form-control'}
                    value={value}
                    onChange={onChange}
                    rows={rows || 3}
                />
            </>
        )
    }

    return (
        <>
            {renderLabel()}
            <input
                ref={ref}
                type={type}
                id={id}
                name={name}
                checked={checked}
                placeholder={placeholder}
                className={className || 'form-control'}
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export const Input = forwardRef(InputBase)
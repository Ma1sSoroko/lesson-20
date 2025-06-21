export function Container(props: { children: React.ReactNode }): React.ReactElement {
  return (
    <div className="container-fluid w-75">
      {props.children}
      </div>
    )
  }
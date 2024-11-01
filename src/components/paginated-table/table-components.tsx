import React from "react"

/* Table  component */

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref)=>(
<div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={`w-full caption-bottom text-sm ${className}`}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

/* Table Header component */

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={` [&>tr]:rounded-lg [&>tr]:bg-header-gradient [&>tr]:border [&>tr]:border-white/10   [&>tr]:text-lg [&>tr]:font-bold  ${className} `} {...props} />
))
TableHeader.displayName = "TableHeader"


/* Table Body component */

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className} `} {...props} />
))
TableBody.displayName = "TableBody"


/* Table Footer component */

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 ${className} `} {...props} />
))
TableFooter.displayName = "TableFooter"

/* Table Row component */

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr ref={ref} className={`border-b transition-colors hover:bg-[#042238]/40 data-[state=selected]:bg-[#042238]/50  ${className} `} {...props} />
))
TableRow.displayName = "TableRow"



/* Table Cell component */

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className} `} {...props} />
))
TableCell.displayName = "TableCell"

/* Table Head Cell component */

const TableHead = React.forwardRef<
HTMLTableCellElement,
React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th ref={ref} className={`h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 last:rounded-r-lg first:rounded-r-lg  " ${className} `} {...props} />
))
TableHead.displayName = "TableHead"


export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
  
  }

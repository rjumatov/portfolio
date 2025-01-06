import { SVGProps } from 'react';

export default function LogoStackOverflow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <g>
        <path d="m6.444 14.839 10.338 2.196.433-2.089-10.338-2.212zM6.215 17.571h10.566v2.127H6.215zM7.8 9.831l9.572 4.526.887-1.944-9.577-4.538zM17.373 14.358l-.001-.001-.001.001z" />
      </g>
      <path d="M2 15.429V24h18.992v-8.571h-2.113v6.428H4.113v-6.428z" />
      <path d="m10.453 5.063 8.109 6.873 1.346-1.65-8.109-6.873zM22 8.587 15.698 0l-1.691 1.286 6.302 8.587z" />
    </svg>
  );
}

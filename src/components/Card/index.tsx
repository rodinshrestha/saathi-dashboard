import clsx from "clsx";
import { MoveRight } from "lucide-react";
import Link from "next/link";

import Typography from "../Typography";

import { StyledDiv } from "./style";

type Props = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  form_type: string;
  label: string;
  label_helper_text: string;
  feature: Array<string>;
  link: string;
};

const Card = ({
  id,
  icon: Icon,
  form_type,
  label,
  label_helper_text,
  feature,
  link,
}: Props) => {
  return (
    <StyledDiv className={clsx("card-wrapper", id)}>
      <div className="card-icon-wrapper">
        <div className="icon-wrapper">
          <Icon />
        </div>

        <div className="card-icon-info">{form_type}</div>
      </div>
      <div className="card-title-wrapper">
        <Typography as="h3" className="card-title">
          {label}
        </Typography>
        <Typography as="p" className="card-sub-title">
          {label_helper_text}
        </Typography>
      </div>

      <div className="card-feature-wrapper">
        <Typography as="p" className="card-feature-title">
          Features
        </Typography>
        <ul className="card-feature-list">
          {feature.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>

      <div className="card-feature-btn-wrapper">
        <Link href={link}>
          <span>Start Data Entry</span>
          <MoveRight size={18} />
        </Link>
      </div>
    </StyledDiv>
  );
};

export default Card;

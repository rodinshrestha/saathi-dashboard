import clsx from "clsx";
import { Plus } from "lucide-react";

import Button from "../Button";
import Typography from "../Typography";

import { StyledDiv } from "./style";

type Props = {
  onClick?: () => void;
  showBtn?: boolean;
  btnlabel?: string;
  title?: string;
  titleHelperText?: string;
  className?: string;
  showBtnIcon?: boolean;
};

const ModuleSectionWrapper = ({
  onClick,
  showBtn,
  btnlabel,
  title,
  titleHelperText,
  className,
  showBtnIcon,
}: Props) => {
  return (
    <StyledDiv className={clsx("module-section-wrapper", className)}>
      <div className="section-content-wrapper">
        {title && <Typography as="body1">{title}</Typography>}
        {titleHelperText && (
          <Typography as="body2">{titleHelperText}</Typography>
        )}
      </div>
      {showBtn && (
        <div className="section-btn-wrapper">
          <Button size="md" className="section-btn" onClick={onClick}>
            {showBtnIcon && <Plus size={16} />}
            {btnlabel}
          </Button>
        </div>
      )}
    </StyledDiv>
  );
};

export default ModuleSectionWrapper;

import React, { useMemo } from 'react';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  InfoHeader,
  LetterImage,
  LetterImageText,
  OwnerInfo,
  OwnerName,
  InfoDate,
} from './styles';

export default function InfoOwner({ info, small, children }) {

    const dateParsed = useMemo(() => {
      if (info.created_at !== null) {
        return format(parseISO(info.created_at), "MMMM dd, yyyy", {
          locale: pt
        });
      }
      return '';
    }, [info.created_at]);

  return (
    <InfoHeader>
      <LetterImage small={small} color={info.value}>
        <LetterImageText small={small}>{info.author_id.substring(0, 1)}</LetterImageText>
      </LetterImage>
      <OwnerInfo small={small}>
        <OwnerName small={small}>{info.author_id}</OwnerName>
        { info.created_at === null ? children : <InfoDate small={small}>{dateParsed}</InfoDate> }
      </OwnerInfo>
    </InfoHeader>
  );
}

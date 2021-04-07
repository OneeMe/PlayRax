import { createElement } from 'rax';

import View from "rax-view";

import styles from "./index.module.css";

interface CellProps {
  left: string;
  right: string;
  center: string;
}

export default (props: CellProps) => {
  const { center, left, right } = props;
  return (
    <View className={styles.columnContainer}>
      <View className={styles.columnContainer}>
        <View className={styles.columnContainer}>
          <View className={styles.columnContainer}>
            <View className={styles.columnContainer}>
              <View className={styles.columnContainer}>
                <View className={styles.columnContainer}>
                  <View className={styles.columnContainer}>
                    <View className={styles.columnContainer}>
                      <View className={styles.columnContainer}>
                        <View className={styles.columnContainer}>
                          <View className={styles.columnContainer}>
                            <View className={styles.columnContainer}>
                              <View className={styles.columnContainer}>
                                <View className={styles.columnContainer}>
                                  {/* <View className={styles.columnContainer}>
                                    <View className={styles.columnContainer}>
                                      <View className={styles.columnContainer}>
                                        <View className={styles.columnContainer}>
                                          <View className={styles.columnContainer}>
                                            <View className={styles.columnContainer}>
                                              <View className={styles.columnContainer}>
                                                <View className={styles.columnContainer}>
                                                  <View className={styles.columnContainer}>
                                                    <View className={styles.columnContainer}>
                                                      <View className={styles.columnContainer}>
                                                        <View className={styles.columnContainer}>
                                                          <View className={styles.columnContainer}>
                                                            <View className={styles.columnContainer}>
                                                              <View className={styles.columnContainer}>
                                                                <View className={styles.rowContainer}>
                                                                  <View className={styles.textLeft}>{left}</View>
                                                                  <View className={styles.textCenter}>{center}</View>
                                                                  <View className={styles.textRight}>{right}</View>
                                                                </View>
                                                              </View>
                                                              <View className={styles.rowContainer}>
                                                                <View className={styles.textLeft}>{left}</View>
                                                                <View className={styles.textCenter}>{center}</View>
                                                                <View className={styles.textRight}>{right}</View>
                                                              </View>
                                                            </View>
                                                            <View className={styles.rowContainer}>
                                                              <View className={styles.textLeft}>{left}</View>
                                                              <View className={styles.textCenter}>{center}</View>
                                                              <View className={styles.textRight}>{right}</View>
                                                            </View>
                                                          </View>
                                                          <View className={styles.rowContainer}>
                                                            <View className={styles.textLeft}>{left}</View>
                                                            <View className={styles.textCenter}>{center}</View>
                                                            <View className={styles.textRight}>{right}</View>
                                                          </View>
                                                        </View>
                                                        <View className={styles.rowContainer}>
                                                          <View className={styles.textLeft}>{left}</View>
                                                          <View className={styles.textCenter}>{center}</View>
                                                          <View className={styles.textRight}>{right}</View>
                                                        </View>
                                                      </View>
                                                      <View className={styles.rowContainer}>
                                                        <View className={styles.textLeft}>{left}</View>
                                                        <View className={styles.textCenter}>{center}</View>
                                                        <View className={styles.textRight}>{right}</View>
                                                      </View>
                                                    </View>
                                                    <View className={styles.rowContainer}>
                                                      <View className={styles.textLeft}>{left}</View>
                                                      <View className={styles.textCenter}>{center}</View>
                                                      <View className={styles.textRight}>{right}</View>
                                                    </View>
                                                  </View>
                                                  <View className={styles.rowContainer}>
                                                    <View className={styles.textLeft}>{left}</View>
                                                    <View className={styles.textCenter}>{center}</View>
                                                    <View className={styles.textRight}>{right}</View>
                                                  </View>
                                                </View>
                                                <View className={styles.rowContainer}>
                                                  <View className={styles.textLeft}>{left}</View>
                                                  <View className={styles.textCenter}>{center}</View>
                                                  <View className={styles.textRight}>{right}</View>
                                                </View>
                                              </View>
                                              <View className={styles.rowContainer}>
                                                <View className={styles.textLeft}>{left}</View>
                                                <View className={styles.textCenter}>{center}</View>
                                                <View className={styles.textRight}>{right}</View>
                                              </View>
                                            </View>
                                            <View className={styles.rowContainer}>
                                              <View className={styles.textLeft}>{left}</View>
                                              <View className={styles.textCenter}>{center}</View>
                                              <View className={styles.textRight}>{right}</View>
                                            </View>
                                          </View>
                                          <View className={styles.rowContainer}>
                                            <View className={styles.textLeft}>{left}</View>
                                            <View className={styles.textCenter}>{center}</View>
                                            <View className={styles.textRight}>{right}</View>
                                          </View>
                                        </View>
                                        <View className={styles.rowContainer}>
                                          <View className={styles.textLeft}>{left}</View>
                                          <View className={styles.textCenter}>{center}</View>
                                          <View className={styles.textRight}>{right}</View>
                                        </View>
                                      </View>
                                      <View className={styles.rowContainer}>
                                        <View className={styles.textLeft}>{left}</View>
                                        <View className={styles.textCenter}>{center}</View>
                                        <View className={styles.textRight}>{right}</View>
                                      </View>
                                    </View>
                                    <View className={styles.rowContainer}>
                                      <View className={styles.textLeft}>{left}</View>
                                      <View className={styles.textCenter}>{center}</View>
                                      <View className={styles.textRight}>{right}</View>
                                    </View>
                                  </View> */}
                                  <View className={styles.rowContainer}>
                                    <View className={styles.textLeft}>{left}</View>
                                    <View className={styles.textCenter}>{center}</View>
                                    <View className={styles.textRight}>{right}</View>
                                  </View>
                                </View>
                                <View className={styles.rowContainer}>
                                  <View className={styles.textLeft}>{left}</View>
                                  <View className={styles.textCenter}>{center}</View>
                                  <View className={styles.textRight}>{right}</View>
                                </View>
                              </View>
                              <View className={styles.rowContainer}>
                                <View className={styles.textLeft}>{left}</View>
                                <View className={styles.textCenter}>{center}</View>
                                <View className={styles.textRight}>{right}</View>
                              </View>
                            </View>
                            <View className={styles.rowContainer}>
                              <View className={styles.textLeft}>{left}</View>
                              <View className={styles.textCenter}>{center}</View>
                              <View className={styles.textRight}>{right}</View>
                            </View>
                          </View>
                          <View className={styles.rowContainer}>
                            <View className={styles.textLeft}>{left}</View>
                            <View className={styles.textCenter}>{center}</View>
                            <View className={styles.textRight}>{right}</View>
                          </View>
                        </View>
                        <View className={styles.rowContainer}>
                          <View className={styles.textLeft}>{left}</View>
                          <View className={styles.textCenter}>{center}</View>
                          <View className={styles.textRight}>{right}</View>
                        </View>
                      </View>
                      <View className={styles.rowContainer}>
                        <View className={styles.textLeft}>{left}</View>
                        <View className={styles.textCenter}>{center}</View>
                        <View className={styles.textRight}>{right}</View>
                      </View>
                    </View>
                    <View className={styles.rowContainer}>
                      <View className={styles.textLeft}>{left}</View>
                      <View className={styles.textCenter}>{center}</View>
                      <View className={styles.textRight}>{right}</View>
                    </View>
                  </View>
                  <View className={styles.rowContainer}>
                    <View className={styles.textLeft}>{left}</View>
                    <View className={styles.textCenter}>{center}</View>
                    <View className={styles.textRight}>{right}</View>
                  </View>
                </View>
                <View className={styles.rowContainer}>
                  <View className={styles.textLeft}>{left}</View>
                  <View className={styles.textCenter}>{center}</View>
                  <View className={styles.textRight}>{right}</View>
                </View>
              </View>
              <View className={styles.rowContainer}>
                <View className={styles.textLeft}>{left}</View>
                <View className={styles.textCenter}>{center}</View>
                <View className={styles.textRight}>{right}</View>
              </View>
            </View>
            <View className={styles.rowContainer}>
              <View className={styles.textLeft}>{left}</View>
              <View className={styles.textCenter}>{center}</View>
              <View className={styles.textRight}>{right}</View>
            </View>
          </View>
          <View className={styles.rowContainer}>
            <View className={styles.textLeft}>{left}</View>
            <View className={styles.textCenter}>{center}</View>
            <View className={styles.textRight}>{right}</View>
          </View>
        </View>
        <View className={styles.rowContainer}>
          <View className={styles.textLeft}>{left}</View>
          <View className={styles.textCenter}>{center}</View>
          <View className={styles.textRight}>{right}</View>
        </View>
      </View>
      <View className={styles.rowContainer}>
        <View className={styles.textLeft}>{left}</View>
        <View className={styles.textCenter}>{center}</View>
        <View className={styles.textRight}>{right}</View>
      </View>
    </View>
  );
}
